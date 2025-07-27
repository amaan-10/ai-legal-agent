/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import type React from "react";

import { motion } from "framer-motion";
import { useChat } from "ai/react";
import { useRef, useEffect, useState } from "react";
import {
  Send,
  Scale,
  User,
  Copy,
  BookOpen,
  AlertTriangle,
  FileText,
  Gavel,
  ChevronRight,
  Plus,
  Settings,
  HelpCircle,
  Sparkles,
  MessageSquare,
  RefreshCw,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ChatBotComponent() {
  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    isLoading,
    error,
    reload,
  } = useChat({
    api: "/api/chat",
    onError: (error) => {
      console.error("Chat error:", error);
    },
  });
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [copiedMessageId, setCopiedMessageId] = useState<string | null>(null);
  const [hasAcceptedDisclaimer, setHasAcceptedDisclaimer] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  useEffect(() => {
    const storedValue = localStorage.getItem("hasAcceptedDisclaimer");
    if (storedValue === "true") {
      setHasAcceptedDisclaimer(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "hasAcceptedDisclaimer",
      hasAcceptedDisclaimer.toString()
    );
  }, [hasAcceptedDisclaimer]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    console.log("Messages updated:", messages.length);
    console.log("Is loading:", isLoading);
    console.log("Error:", error);
  }, [messages, isLoading, error]);

  const copyToClipboard = async (text: string, messageId: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedMessageId(messageId);
      setTimeout(() => setCopiedMessageId(null), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  const formatTime = (timestamp: Date) => {
    return new Intl.DateTimeFormat("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
      timeZone: "Asia/Kolkata",
    }).format(timestamp);
  };

  const legalSuggestions = [
    "Property law in India",
    "Labour law compliance",
    "GST regulations",
    "Family law matters",
    "Criminal procedure code",
    "Contract law basics",
    "Consumer Protection Act",
    "Intellectual property rights",
  ];

  const quickActions = [
    {
      icon: FileText,
      label: "Property Law",
      query: "Tell me about property laws in India",
    },
    {
      icon: Scale,
      label: "Consumer Rights",
      query: "What are my consumer rights under Indian law?",
    },
    {
      icon: Gavel,
      label: "Criminal Law",
      query: "Explain criminal procedure in India",
    },
    {
      icon: BookOpen,
      label: "Contract Law",
      query: "What are the basics of contract law in India?",
    },
  ];

  const handleSuggestionClick = (suggestion: string) => {
    handleInputChange({ target: { value: suggestion } } as any);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted with input:", input);
    handleSubmit(e);
  };

  const handleRetry = () => {
    if (messages.length > 0) {
      reload();
    }
  };

  if (!hasAcceptedDisclaimer) {
    return (
      <section
        className="flex flex-col flex-none items-center justify-center place-content-center gap-[10px] overflow-hidden px-[60px] py-auto relative w-full h-[100vh] z-[3]"
        data-framer-name="LegalDisclaimer"
      >
        <div className="flex flex-col flex-none items-center gap-[90px] h-min max-w-[800px] overflow-visible p-0 relative w-full">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 210, damping: 70 }}
            className="flex flex-row flex-none items-center gap-[13px] h-min w-full overflow-visible p-[7px] relative rounded-[45px] bg-white shadow-[0_0_14px_0_rgba(0,0,0,0.05)] opacity-100"
          >
            <div className="flex-[1_0_0px] h-auto relative w-px">
              <div
                className="flex flex-col items-center gap-[32px] h-min w-full overflow-hidden p-[48px] relative rounded-[35px] opacity-100"
                style={{
                  background: `linear-gradient(180deg, #fff 52%, #fafaf7 100%)`,
                  borderStyle: "solid",
                  borderWidth: "1px",
                  borderColor: "rgb(240, 236, 231)",
                }}
              >
                <div
                  className="flex items-center justify-center flex-row flex-nowrap gap-[10px] h-min w-min overflow-visible p-0 relative transition-transform duration-500 ease-in-out"
                  data-framer-name="Logo Wrapper"
                  style={{
                    borderRadius: 0,
                    transform: "translateX(0)",
                    transformOrigin: "50% 50% 0px",
                  }}
                >
                  <Link
                    className="block aspect-[3.4545] flex-none h-[49px] w-[171px] overflow-visible relative no-underline"
                    data-framer-name="Logo"
                    href="/"
                    data-framer-page-link-current="true"
                    style={{
                      transform: "none",
                      transformOrigin: "50% 50% 0px",
                    }}
                  >
                    <div
                      data-framer-background-image-wrapper="true"
                      style={{
                        position: "absolute",
                        borderRadius: "inherit",
                        inset: 0,
                      }}
                    >
                      <Image
                        decoding="async"
                        src="/images/Nyāyik.png"
                        alt="Logo"
                        style={{
                          display: "block",
                          width: "100%",
                          height: "100%",
                          borderRadius: "inherit",
                          objectPosition: "center center",
                          objectFit: "cover",
                        }}
                        width={100}
                        height={100}
                      />
                    </div>
                  </Link>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-[20px] p-6 w-full">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-urbanist font-semibold text-red-800 mb-3">
                        Important Legal Disclaimer
                      </h3>
                      <div className="space-y-3 text-sm text-red-700 font-inter leading-relaxed">
                        <p>
                          <strong>
                            This AI Legal Advisor is for informational purposes
                            only
                          </strong>{" "}
                          and does not constitute legal advice. The information
                          provided is based on general understanding of Indian
                          laws and should not be relied upon for specific legal
                          decisions.
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                          <li>
                            Always consult with a qualified lawyer for specific
                            legal matters
                          </li>
                          <li>
                            Laws change frequently and this AI may not reflect
                            the latest updates
                          </li>
                          <li>
                            Each legal situation is unique and requires
                            professional assessment
                          </li>
                          <li>
                            This service does not create an attorney-client
                            relationship
                          </li>
                          <li>
                            Information provided may not be applicable to your
                            specific jurisdiction
                          </li>
                        </ul>
                        <p className="font-semibold">
                          By proceeding, you acknowledge that you understand
                          these limitations and will seek professional legal
                          counsel for important matters.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 w-full">
                  <button
                    onClick={() => setHasAcceptedDisclaimer(true)}
                    className="flex-1 opacity-100 rounded-[20px] bg-[#111111] hover:bg-[#37312f] border border-solid border-[#989897]
                      shadow-[0px_0.48175px_1.25255px_-1.16667px_rgba(0,0,0,0.1),0px_1.83083px_4.76015px_-2.33333px_rgba(0,0,0,0.09),0px_8px_20.8px_-3.5px_rgba(0,0,0,0.043),0px_-2px_9px_0px_inset_rgba(255,255,255,0.49),0px_0px_0px_2px_rgba(0,0,0,0.2)]
                      flex flex-row flex-nowrap items-center justify-center content-center gap-2 
                      cursor-pointer h-[52px] px-[28px] py-[13px] relative overflow-visible transition-all duration-200"
                  >
                    <span className="text-[17px] text-white font-urbanist font-medium">
                      I Understand & Proceed
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <div className="h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div
        className={`${
          sidebarCollapsed ? "w-16" : "w-80"
        } bg-white border-r border-gray-200 flex flex-col transition-all duration-300`}
      >
        {/* Sidebar Header */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            {!sidebarCollapsed && (
              <div className="flex items-center gap-3">
                <div
                  className="flex items-center justify-center flex-row flex-nowrap gap-[10px] h-min w-min overflow-visible p-0 relative transition-transform duration-500 ease-in-out"
                  data-framer-name="Logo Wrapper"
                  style={{
                    borderRadius: 0,
                    transform: "translateX(0)",
                    transformOrigin: "50% 50% 0px",
                  }}
                >
                  <Link
                    className="block aspect-[3.4545] flex-none h-[33px] w-[114px] overflow-visible relative no-underline"
                    data-framer-name="Logo"
                    href="/"
                    data-framer-page-link-current="true"
                    style={{
                      transform: "none",
                      transformOrigin: "50% 50% 0px",
                    }}
                  >
                    <div
                      data-framer-background-image-wrapper="true"
                      style={{
                        position: "absolute",
                        borderRadius: "inherit",
                        inset: 0,
                      }}
                    >
                      <Image
                        decoding="async"
                        src="/images/Nyāyik.png"
                        alt="Logo"
                        style={{
                          display: "block",
                          width: "100%",
                          height: "100%",
                          borderRadius: "inherit",
                          objectPosition: "center center",
                          objectFit: "cover",
                        }}
                        width={100}
                        height={100}
                      />
                    </div>
                  </Link>
                </div>
              </div>
            )}
            <button
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ChevronRight
                className={`w-4 h-4 text-gray-500 transition-transform ${
                  sidebarCollapsed ? "" : "rotate-180"
                }`}
              />
            </button>
          </div>
        </div>

        {/* New Chat Button */}
        <div className="p-4">
          <button
            onClick={() => setHasAcceptedDisclaimer(true)}
            className="flex-1 opacity-100 rounded-[20px] bg-[#111111] hover:bg-[#37312f] border border-solid border-[#989897]
                      shadow-[0px_0.48175px_1.25255px_-1.16667px_rgba(0,0,0,0.1),0px_1.83083px_4.76015px_-2.33333px_rgba(0,0,0,0.09),0px_8px_20.8px_-3.5px_rgba(0,0,0,0.043),0px_-2px_9px_0px_inset_rgba(255,255,255,0.49),0px_0px_0px_2px_rgba(0,0,0,0.2)]
                      flex flex-row flex-nowrap items-center justify-center content-center gap-2 
                      cursor-pointer h-[52px] py-2.5 px-4 relative overflow-visible transition-all duration-200 w-full"
          >
            <span className="text-[17px] text-white font-urbanist font-medium flex gap-2">
              <Plus className="w-5 h-5" />
              {!sidebarCollapsed && "New Legal Query"}
            </span>
          </button>
        </div>

        {/* Quick Actions */}
        {!sidebarCollapsed && (
          <div className="px-4 pb-4">
            <h3 className="text-sm font-medium text-gray-700 mb-3">
              Quick Actions
            </h3>
            <div className="space-y-2">
              {quickActions.map((action, index) => (
                <button
                  key={index}
                  onClick={() => handleSuggestionClick(action.query)}
                  className="w-full text-left p-3 hover:bg-gray-50 rounded-lg transition-colors flex items-center gap-3 group"
                >
                  <action.icon className="w-4 h-4 text-amber-600" />
                  <span className="text-sm text-gray-700 group-hover:text-gray-900">
                    {action.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Spacer */}
        <div className="flex-1" />

        {/* Sidebar Footer */}
        <div className="p-4 border-t border-gray-200">
          <div className="space-y-2">
            <button className="w-full text-left p-2 hover:bg-gray-50 rounded-lg transition-colors flex items-center gap-3">
              <Settings className="w-4 h-4 text-gray-500" />
              {!sidebarCollapsed && (
                <span className="text-sm text-gray-700">Settings</span>
              )}
            </button>
            <button className="w-full text-left p-2 hover:bg-gray-50 rounded-lg transition-colors flex items-center gap-3">
              <HelpCircle className="w-4 h-4 text-gray-500" />
              {!sidebarCollapsed && (
                <span className="text-sm text-gray-700">Help & Support</span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Chat Header */}

        {/* Legal Disclaimer Banner */}
        <div className="bg-amber-50 border-b border-amber-200 p-3">
          <div className="flex items-center gap-2 max-w-4xl mx-auto">
            <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0" />
            <p className="text-sm text-amber-800">
              <strong>Reminder:</strong> This is informational guidance only.
              Consult a qualified lawyer for legal advice.
            </p>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto">
          <div className="max-w-4xl mx-auto p-6">
            {messages.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-12">
                <div
                  className="flex flex-col items-center justify-center gap-6 w-full h-min overflow-hidden pb-3 relative"
                  data-framer-name="Heading"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 210, damping: 70 }}
                    viewport={{ once: true, amount: 0.6 }}
                    className="flex-none h-auto w-auto relative opacity-100"
                  >
                    <span
                      className="flex flex-row items-center justify-center gap-[10px] p-[8px_25px] w-min h-min relative overflow-hidden rounded-[30px] opacity-100 border-[1.5px] border-solid border-[#f3f3f1] bg-[#fefefe] shadow-none no-underline"
                      data-border="true"
                      data-framer-name="Label Section"
                    >
                      <div
                        className="flex flex-row items-center justify-center gap-2 w-min h-min relative overflow-visible p-0 flex-none order-1 opacity-100"
                        data-framer-name="Right"
                      >
                        <Scale className="w-4 h-4 text-[#37312f]" />
                        <div
                          className="flex flex-col justify-start flex-shrink-0 flex-none h-auto w-auto relative whitespace-pre outline-none opacity-100"
                          data-framer-component-type="RichTextContainer"
                        >
                          <p
                            className="text-[#37312f] font-normal font-urbanist"
                            data-styles-preset="NFQi0OUa3"
                          >
                            Legal AI
                          </p>
                        </div>
                      </div>
                    </span>
                  </motion.div>
                  <div
                    className="flex flex-col justify-start flex-shrink-0 flex-none h-auto w-auto relative whitespace-pre outline-none opacity-100"
                    data-framer-component-type="RichTextContainer"
                  >
                    <motion.h2
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 210,
                        damping: 70,
                        delay: 0.2,
                        duration: 0.7,
                      }}
                      viewport={{ once: true, amount: 0.6 }}
                      className="text-5xl font-urbanist font-semibold"
                      data-styles-preset="o4SbqhkD9"
                    >
                      Welcome to Legal AI Advisor!
                    </motion.h2>
                  </div>
                  <div
                    className="flex flex-col justify-start flex-shrink-0 flex-none h-auto w-full max-w-[650px] relative whitespace-pre-wrap break-words outline-none opacity-100"
                    data-framer-component-type="RichTextContainer"
                  >
                    <motion.p
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 210,
                        damping: 70,
                        delay: 0.4,
                        duration: 0.7,
                      }}
                      viewport={{ once: true, amount: 0.1 }}
                      className="text-[#616161] font-normal text-base text-center"
                      data-styles-preset="UCvrJxnzN"
                    >
                      I can help you understand Indian laws and legal
                      procedures. Ask me about various legal topics or choose
                      from the suggestions below.
                    </motion.p>
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 210,
                    damping: 70,
                    delay: 0.6,
                    duration: 0.7,
                  }}
                  viewport={{ once: true, amount: 0.6 }}
                  className="flex items-center gap-2 text-xs text-amber-700 bg-amber-50 px-3 py-2 mb-3 rounded-full"
                >
                  <FileText className="w-3 h-3" />
                  <span>
                    Based on Indian Constitution, IPC, CPC, CrPC & other acts
                  </span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 210,
                    damping: 70,
                    delay: 0.8,
                    duration: 0.7,
                  }}
                  viewport={{ once: true, amount: 0.6 }}
                  className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full max-w-2xl pb-3"
                >
                  {legalSuggestions.slice(0, 3).map((suggestion, index) => (
                    <button
                      key={index}
                      onClick={() => handleSuggestionClick(suggestion)}
                      className="p-4 bg-white border border-gray-200 rounded-full hover:border-amber-300 hover:bg-amber-50 transition-all duration-200 text-left group"
                    >
                      <div className="flex items-center gap-3">
                        <MessageSquare className="w-4 h-4 text-amber-600" />
                        <span className="text-xs text-gray-700 group-hover:text-gray-900">
                          {suggestion}
                        </span>
                      </div>
                    </button>
                  ))}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 210,
                    damping: 70,
                    delay: 1,
                    duration: 0.7,
                  }}
                  viewport={{ once: true, amount: 0.6 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full max-w-2xl"
                >
                  {legalSuggestions.slice(3, 5).map((suggestion, index) => (
                    <button
                      key={index}
                      onClick={() => handleSuggestionClick(suggestion)}
                      className="p-4 bg-white border border-gray-200 rounded-full hover:border-amber-300 hover:bg-amber-50 transition-all duration-200 text-left group"
                    >
                      <div className="flex items-center gap-3">
                        <MessageSquare className="w-4 h-4 text-amber-600" />
                        <span className="text-xs text-gray-700 group-hover:text-gray-900">
                          {suggestion}
                        </span>
                      </div>
                    </button>
                  ))}
                </motion.div>
              </div>
            ) : (
              <div className="space-y-6">
                {messages.map((message, index) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className={`flex gap-4 ${
                      message.role === "user" ? "flex-row-reverse" : "flex-row"
                    }`}
                  >
                    {/* Avatar */}
                    <div className="flex-shrink-0">
                      {message.role === "user" ? (
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                          <User className="w-4 h-4 text-white" />
                        </div>
                      ) : (
                        <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center">
                          <Scale className="w-4 h-4 text-white" />
                        </div>
                      )}
                    </div>

                    {/* Message Content */}
                    <div
                      className={`flex flex-col gap-2 max-w-[80%] ${
                        message.role === "user" ? "items-end" : "items-start"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-gray-900">
                          {message.role === "user" ? "You" : "Legal AI Advisor"}
                        </span>
                        <span className="text-xs text-gray-500">
                          {formatTime(message.createdAt || new Date())}
                        </span>
                      </div>

                      <div
                        className={`relative group p-4 rounded-2xl ${
                          message.role === "user"
                            ? "bg-gradient-to-br from-blue-500 to-blue-600 text-white"
                            : "bg-white border border-gray-200 text-gray-900"
                        }`}
                      >
                        <div className="text-sm leading-relaxed whitespace-pre-wrap">
                          {message.content}
                        </div>

                        {/* Legal Disclaimer for AI responses */}
                        {message.role === "assistant" && (
                          <div className="mt-3 pt-3 border-t border-gray-100">
                            <div className="flex items-center gap-2 text-xs text-amber-700">
                              <AlertTriangle className="w-3 h-3" />
                              <span>
                                Informational only - Consult a lawyer for legal
                                advice
                              </span>
                            </div>
                          </div>
                        )}

                        {/* Message Actions */}
                        {message.role === "assistant" && (
                          <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <div className="flex items-center gap-1">
                              <button
                                onClick={() =>
                                  copyToClipboard(message.content, message.id)
                                }
                                className="p-1.5 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                                title="Copy message"
                              >
                                <Copy className="w-3 h-3 text-gray-600" />
                              </button>
                              {copiedMessageId === message.id && (
                                <span className="text-xs text-green-600 ml-2">
                                  Copied!
                                </span>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}

                {/* Typing Indicator */}
                {isLoading && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex gap-4"
                  >
                    <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center">
                      <Scale className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <span className="text-sm font-medium text-gray-900">
                        Legal AI Advisor
                      </span>
                      <div className="bg-white border border-gray-200 p-4 rounded-2xl">
                        <div className="flex items-center gap-1">
                          <div className="w-2 h-2 bg-amber-600 rounded-full animate-bounce"></div>
                          <div
                            className="w-2 h-2 bg-amber-600 rounded-full animate-bounce"
                            style={{ animationDelay: "0.1s" }}
                          ></div>
                          <div
                            className="w-2 h-2 bg-amber-600 rounded-full animate-bounce"
                            style={{ animationDelay: "0.2s" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Error Display */}
                {error && (
                  <div className="flex justify-center">
                    <div className="bg-red-50 border border-red-200 p-4 rounded-2xl max-w-md">
                      <div className="flex items-center gap-2 mb-3">
                        <AlertTriangle className="w-4 h-4 text-red-600" />
                        <p className="text-sm text-red-700">
                          Sorry, there was an error processing your request.
                        </p>
                      </div>
                      <button
                        onClick={handleRetry}
                        className="flex items-center gap-2 px-3 py-2 bg-red-100 hover:bg-red-200 rounded-lg text-sm text-red-700 transition-colors"
                      >
                        <RefreshCw className="w-3 h-3" />
                        Try Again
                      </button>
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>
            )}
          </div>
        </div>

        {/* Chat Input */}
        <div className="bg-white border-t border-gray-200 p-4">
          <div className="max-w-4xl mx-auto">
            <form onSubmit={handleSubmit} className="flex items-end gap-3">
              <div className="flex-1 relative">
                <textarea
                  value={input}
                  onChange={handleInputChange}
                  placeholder="Ask about Indian laws, legal procedures, rights, or regulations..."
                  disabled={isLoading}
                  rows={1}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      handleSubmit(e as any);
                    }
                  }}
                  className="w-full resize-none border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent disabled:opacity-50 text-sm leading-relaxed min-h-[48px] max-h-[120px] overflow-hidden"
                  style={{
                    height: "auto",
                    minHeight: "48px",
                  }}
                  onInput={(e) => {
                    const target = e.target as HTMLTextAreaElement;
                    target.style.height = "auto";
                    target.style.height =
                      Math.min(target.scrollHeight, 120) + "px";
                  }}
                />
              </div>

              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="opacity-100 rounded-[20px] bg-gradient-to-r from-amber-600 to-orange-700 hover:from-amber-700 hover:to-orange-800 disabled:from-[#989897] disabled:to-[#989897] border border-solid border-[#989897]
            shadow-[0px_0.48175px_1.25255px_-1.16667px_rgba(0,0,0,0.1),0px_1.83083px_4.76015px_-2.33333px_rgba(0,0,0,0.09),0px_8px_20.8px_-3.5px_rgba(0,0,0,0.043),0px_-2px_9px_0px_inset_rgba(255,255,255,0.49),0px_0px_0px_2px_rgba(0,0,0,0.2)]
            flex flex-row flex-nowrap items-center justify-center content-center gap-2 
            cursor-pointer h-[52px] px-[20px] py-[13px] relative overflow-visible disabled:cursor-not-allowed transition-all duration-200 hover:scale-105 active:scale-95"
                data-border="true"
                data-framer-name="Default"
                data-reset="button"
              >
                <Send className="w-4 h-4 text-white" />
                <span className="text-[15px] text-white font-urbanist font-medium">
                  Ask Legal AI
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
