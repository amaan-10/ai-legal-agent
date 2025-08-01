/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { motion } from "framer-motion";
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
  MessageSquare,
  RefreshCw,
  Menu,
  X,
  SquarePen,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useResponsiveState } from "@/lib/useResponsiveState";
import { useStreamChat } from "@/hooks/useStreamChat";
import ReactMarkdown from "react-markdown";
import TypingMarkdown from "@/components/TypingMarkdown";

export default function ChatBotComponent() {
  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    isLoading,
    error,
    reload,
  } = useStreamChat();

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [copiedMessageId, setCopiedMessageId] = useState<string | null>(null);
  const [hasAcceptedDisclaimer, setHasAcceptedDisclaimer] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    console.log("Message:", messages);
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

  const formatTime = (timestamp: string | Date) => {
    try {
      const date = timestamp instanceof Date ? timestamp : new Date(timestamp);
      if (isNaN(date.getTime())) return ""; // invalid date
      return new Intl.DateTimeFormat("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
        timeZone: "Asia/Kolkata",
      }).format(date);
    } catch {
      return "";
    }
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
    setMobileMenuOpen(false); // Close mobile menu when suggestion is clicked
  };

  const handleRetry = () => {
    if (messages.length > 0) {
      reload();
    }
  };

  const deviceType = useResponsiveState();

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuOpen &&
        !(event.target as Element).closest(".mobile-sidebar")
      ) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileMenuOpen]);

  if (!hasAcceptedDisclaimer) {
    return (
      <section className="flex flex-col flex-none items-center justify-center place-content-center gap-[10px] overflow-hidden px-4 sm:px-8 md:px-[60px] py-auto relative w-full h-[100vh] z-[3]">
        <div className="flex flex-col flex-none items-center gap-8 sm:gap-[90px] h-min max-w-[800px] overflow-visible p-0 relative w-full">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 210, damping: 70 }}
            className="flex flex-row flex-none items-center gap-[13px] h-min w-full overflow-visible p-[7px] relative rounded-[25px] sm:rounded-[45px] bg-white shadow-[0_0_14px_0_rgba(0,0,0,0.05)] opacity-100"
          >
            <div className="flex-[1_0_0px] h-auto relative w-px">
              <div
                className="flex flex-col items-center gap-6 sm:gap-[32px] h-min w-full overflow-hidden p-6 sm:p-[48px] relative rounded-[20px] sm:rounded-[35px] opacity-100"
                style={{
                  background: `linear-gradient(180deg, #fff 52%, #fafaf7 100%)`,
                  borderStyle: "solid",
                  borderWidth: "1px",
                  borderColor: "rgb(240, 236, 231)",
                }}
              >
                <div className="flex items-center justify-center flex-row flex-nowrap gap-[10px] h-min w-min overflow-visible p-0 relative transition-transform duration-500 ease-in-out">
                  <Link
                    className="block aspect-[3.4545] flex-none h-[35px] sm:h-[49px] w-[120px] sm:w-[171px] overflow-visible relative no-underline"
                    href="/"
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

                <div className="bg-red-50 border border-red-200 rounded-[15px] sm:rounded-[20px] p-4 sm:p-6 w-full">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-base sm:text-lg font-urbanist font-semibold text-red-800 mb-3">
                        Important Legal Disclaimer
                      </h3>
                      <div className="space-y-3 text-xs sm:text-sm text-red-700 font-inter leading-relaxed">
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
                        <ul className="list-disc list-inside space-y-2 ml-2 sm:ml-4">
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
                    className="flex-1 opacity-100 rounded-[15px] sm:rounded-[20px] bg-[#111111] hover:bg-[#37312f] border border-solid border-[#989897]
                      shadow-[0px_0.48175px_1.25255px_-1.16667px_rgba(0,0,0,0.1),0px_1.83083px_4.76015px_-2.33333px_rgba(0,0,0,0.09),0px_8px_20.8px_-3.5px_rgba(0,0,0,0.043),0px_-2px_9px_0px_inset_rgba(255,255,255,0.49),0px_0px_0px_2px_rgba(0,0,0,0.2)]
                      flex flex-row flex-nowrap items-center justify-center content-center gap-2
                       cursor-pointer h-[48px] sm:h-[52px] px-6 sm:px-[28px] py-[13px] relative overflow-visible transition-all duration-200 active:scale-95"
                  >
                    <span className="text-sm sm:text-[17px] text-white font-urbanist font-medium">
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
    <div className="h-screen bg-gray-50 flex relative">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-lg border border-gray-200"
      >
        {mobileMenuOpen ? (
          <X className="w-5 h-5 text-gray-600" />
        ) : (
          <Menu className="w-5 h-5 text-gray-600" />
        )}
      </button>

      {/* Mobile Overlay */}
      {mobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`mobile-sidebar ${
          // Mobile: slide in from left when open, hidden when closed
          mobileMenuOpen
            ? "fixed left-0 top-0 h-full w-80 z-50 transform translate-x-0"
            : "fixed left-0 top-0 h-full w-80 z-50 transform -translate-x-full"
        } md:relative md:transform-none md:z-auto ${
          // Desktop: normal sidebar behavior
          sidebarCollapsed ? "md:w-20" : "md:w-60 lg:w-64"
        } bg-white border-r border-gray-200 flex flex-col transition-all duration-300`}
      >
        {/* Sidebar Header */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            {(!sidebarCollapsed || mobileMenuOpen) && (
              <div className="flex items-center gap-3">
                <Link
                  className="block aspect-[3.4545] flex-none h-[28px] sm:h-[33px] w-[96px] sm:w-[114px] overflow-visible relative no-underline"
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
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
            )}
            <button
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              className="hidden md:block p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
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
            onClick={() => {
              setHasAcceptedDisclaimer(true);
              setMobileMenuOpen(false);
            }}
            className="flex-1 opacity-100 rounded-[15px] sm:rounded-[20px] bg-[#111111] hover:bg-[#37312f] active:bg-[#37312f] border border-solid border-[#989897]
                      shadow-[0px_0.48175px_1.25255px_-1.16667px_rgba(0,0,0,0.1),0px_1.83083px_4.76015px_-2.33333px_rgba(0,0,0,0.09),0px_8px_20.8px_-3.5px_rgba(0,0,0,0.043),0px_-2px_9px_0px_inset_rgba(255,255,255,0.49),0px_0px_0px_2px_rgba(0,0,0,0.2)]
                      flex flex-row flex-nowrap items-center justify-center content-center gap-2
                       cursor-pointer h-[48px] sm:h-[52px] py-2.5 px-4 relative overflow-visible transition-all duration-200 w-full active:scale-95"
          >
            <span className="text-sm sm:text-[15px] lg:text-[17px] text-white font-urbanist font-medium flex items-center gap-2">
              <SquarePen className="w-4 lg:w-5 h-4 lg:h-5" />
              {(!sidebarCollapsed || mobileMenuOpen) && "New Legal Query"}
            </span>
          </button>
        </div>

        {/* Quick Actions */}
        {(!sidebarCollapsed || mobileMenuOpen) && (
          <div className="px-4 pb-4">
            <h3 className="text-sm font-medium text-gray-700 mb-3">
              Quick Actions
            </h3>
            <div className="space-y-2">
              {quickActions.map((action, index) => (
                <button
                  key={index}
                  onClick={() => handleSuggestionClick(action.query)}
                  className="w-full text-left p-3 hover:bg-gray-50 active:bg-gray-100 rounded-lg transition-colors flex items-center gap-3 group"
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
            <button className="w-full text-left p-2 hover:bg-gray-50 active:bg-gray-100 rounded-lg transition-colors flex items-center gap-3">
              <Settings className="w-4 h-4 text-gray-500" />
              {(!sidebarCollapsed || mobileMenuOpen) && (
                <span className="text-sm text-gray-700">Settings</span>
              )}
            </button>
            <button className="w-full text-left p-2 hover:bg-gray-50 active:bg-gray-100 rounded-lg transition-colors flex items-center gap-3">
              <HelpCircle className="w-4 h-4 text-gray-500" />
              {(!sidebarCollapsed || mobileMenuOpen) && (
                <span className="text-sm text-gray-700">Help & Support</span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Legal Disclaimer Banner */}
        <div className="bg-amber-50 border-b border-amber-200 p-6 md:p-3">
          <div className="flex items-center justify-center md:justify-start gap-2 pl-9 md:pl-0">
            <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0" />
            <p className="text-xs sm:text-sm text-amber-800">
              <strong>Reminder:</strong> This is informational guidance only.
              Consult a qualified lawyer for legal advice.
            </p>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="flex flex-1 overflow-y-auto">
          <div className="w-full h-max max-w-4xl m-auto p-3 md:p-6">
            {messages.length === 0 ? (
              <div className="flex flex-col justify-self-center self-center items-center justify-center h-full text-center py-8 sm:py-12">
                <div className="flex flex-col items-center justify-center gap-4 sm:gap-6 w-full h-min overflow-hidden pb-3 relative">
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 210, damping: 70 }}
                    viewport={{ once: true, amount: 0.6 }}
                    className="flex-none h-auto w-auto relative opacity-100"
                  >
                    <span className="flex flex-row items-center justify-center gap-[10px] p-[6px_20px] sm:p-[8px_25px] w-min h-min relative overflow-hidden rounded-[25px] sm:rounded-[30px] opacity-100 border-[1.5px] border-solid border-[#f3f3f1] bg-[#fefefe] shadow-none no-underline">
                      <div className="flex flex-row items-center justify-center gap-2 w-min h-min relative overflow-visible p-0 flex-none order-1 opacity-100">
                        <Scale className="w-4 h-4 text-[#37312f]" />
                        <div className="flex flex-col justify-start flex-shrink-0 flex-none h-auto w-auto relative whitespace-pre outline-none opacity-100">
                          <p className="text-[#37312f] font-normal font-urbanist text-sm sm:text-[15px] lg:text-base">
                            Legal AI
                          </p>
                        </div>
                      </div>
                    </span>
                  </motion.div>

                  <div className="flex flex-col justify-start flex-shrink-0 flex-none h-auto w-auto relative whitespace-pre outline-none opacity-100">
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
                      className="text-2xl sm:text-[32px] md:text-[38px] lg:text-[48px] font-urbanist font-semibold px-4"
                    >
                      Welcome to Legal AI Advisor!
                    </motion.h2>
                  </div>

                  <div className="flex flex-col justify-start flex-shrink-0 flex-none h-auto w-full max-w-[650px] relative whitespace-pre-wrap break-words outline-none opacity-100 px-4">
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
                      className="text-[#616161] font-normal text-sm lg:text-base text-center"
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
                  className="flex items-center gap-2 text-xs text-amber-700 bg-amber-50 px-3 py-2 mb-3 rounded-full mx-4"
                >
                  <FileText className="w-3 h-3" />
                  <span className="text-center">
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
                  className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full max-w-2xl pb-3 px-4"
                >
                  {legalSuggestions.slice(0, 3).map((suggestion, index) => (
                    <button
                      key={index}
                      onClick={() => handleSuggestionClick(suggestion)}
                      className="p-3 sm:p-4 bg-white border border-gray-200 rounded-2xl hover:border-amber-300 hover:bg-amber-50 active:bg-amber-100 transition-all duration-200 text-left group"
                    >
                      <div className="flex items-center gap-3">
                        <MessageSquare className="w-4 h-4 text-amber-600" />
                        <span className="text-xs sm:text-sm text-gray-700 group-hover:text-gray-900">
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
                  className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full max-w-2xl px-4"
                >
                  {legalSuggestions.slice(3, 5).map((suggestion, index) => (
                    <button
                      key={index}
                      onClick={() => handleSuggestionClick(suggestion)}
                      className="p-3 sm:p-4 bg-white border border-gray-200 rounded-2xl hover:border-amber-300 hover:bg-amber-50 active:bg-amber-100 transition-all duration-200 text-left group"
                    >
                      <div className="flex items-center gap-3">
                        <MessageSquare className="w-4 h-4 text-amber-600" />
                        <span className="text-xs sm:text-sm text-gray-700 group-hover:text-gray-900">
                          {suggestion}
                        </span>
                      </div>
                    </button>
                  ))}
                </motion.div>
              </div>
            ) : (
              <div className="space-y-4 sm:space-y-6">
                {messages.map((message, index) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className={`flex gap-3 sm:gap-4 ${
                      message.role === "user" ? "flex-row-reverse" : "flex-row"
                    }`}
                  >
                    {/* Avatar */}
                    <div className="flex-shrink-0">
                      {message.role === "user" ? (
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                          <User className="w-5 h-5 text-white" />
                        </div>
                      ) : (
                        <div className="w-10 h-10 bg-[#FE6A2E] rounded-full flex items-center justify-center">
                          <Image
                            src="/images/logo-orange.png"
                            alt="Logo"
                            className="w-8 h-8 rounded-full"
                            width={50}
                            height={50}
                          />
                        </div>
                      )}
                    </div>

                    {/* Message Content */}
                    <div
                      className={`flex flex-col gap-2 max-w-[85%] sm:max-w-[80%] group ${
                        message.role === "user" ? "items-end" : "items-start"
                      }`}
                    >
                      <div
                        className={`relative rounded-2xl ${
                          message.role === "user"
                            ? " bg-white shadow-md text-[#494949] font-urbanist py-4 px-5 font-medium"
                            : "bg-white border border-gray-200 py-4 px-5"
                        }`}
                      >
                        <TypingMarkdown content={message.content} />

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
                      </div>
                      {/* Message Actions */}
                      {message.role === "assistant" ? (
                        <div className="opacity-100 transition-opacity">
                          <div className="flex items-center gap-1">
                            <button
                              onClick={() =>
                                copyToClipboard(message.content, message.id)
                              }
                              className="p-1.5 bg-transparent hover:bg-gray-200 active:bg-gray-300 rounded-lg transition-colors"
                              title="Copy message"
                            >
                              <Copy className="w-3 md:w-4 h-3 md:h-4 text-gray-600" />
                            </button>
                            {copiedMessageId === message.id && (
                              <span className="text-xs text-green-600 ml-2">
                                Copied!
                              </span>
                            )}
                          </div>
                        </div>
                      ) : (
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="flex items-center gap-1">
                            {copiedMessageId === message.id && (
                              <span className="text-xs text-green-600 mr-2">
                                Copied!
                              </span>
                            )}
                            <button
                              onClick={() =>
                                copyToClipboard(message.content, message.id)
                              }
                              className="p-1.5 bg-transparent hover:bg-gray-200 active:bg-gray-300 rounded-lg transition-colors"
                              title="Copy message"
                            >
                              <Copy className="w-3 md:w-4 h-3 md:h-4 text-gray-600" />
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}

                {/* Typing Indicator */}
                {isLoading && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex gap-3 sm:gap-4"
                  >
                    <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center">
                      <Scale className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <span className="text-xs sm:text-sm font-medium text-gray-900">
                        Legal AI Advisor
                      </span>
                      <div className="bg-white border border-gray-200 p-3 sm:p-4 rounded-2xl">
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
                        className="flex items-center gap-2 px-3 py-2 bg-red-100 hover:bg-red-200 active:bg-red-300 rounded-lg text-sm text-red-700 transition-colors"
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
        <div className="px-4 pb-4 safe-area-inset-bottom">
          <div className="w-full max-w-4xl flex justify-self-center">
            <form
              onSubmit={handleSubmit}
              className="relative flex flex-row flex-nowrap items-start justify-center gap-0 p-0 w-full h-min flex-none overflow-visible rounded-[17px] opacity-100"
            >
              <label
                data-border="true"
                className="relative flex flex-row flex-nowrap items-center justify-center gap-[7px] md:gap-6 py-[2px] pr-[7px] h-min w-[1px] flex-[1_0_0px] rounded-[23px] opacity-100 shadow-[0_2px_20px_0_rgba(0,0,0,0.07)] bg-[linear-gradient(180deg,rgba(255,255,255,1)_50%,rgba(254,254,254,1)_100%)] border border-solid border-[rgb(240,236,231)]"
              >
                <div className="flex-[1_0_0px] relative text-left h-auto w-full md:w-[1px] opacity-100 ">
                  <textarea
                    value={input}
                    onChange={handleInputChange}
                    placeholder={
                      deviceType === "desktop"
                        ? "Ask about Indian laws, legal procedures, rights, or regulations..."
                        : deviceType === "tablet"
                        ? "Ask about Indian laws or legal procedures..."
                        : deviceType === "mobile"
                        ? "Ask about Indian laws procedures..."
                        : ""
                    }
                    disabled={isLoading}
                    rows={1}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault();
                        handleSubmit(e as any);
                      }
                    }}
                    className="w-full p-[12px_20px_12px_20px] bg-transparent text-left font-inter font-normal text-[#111111] focus-visible:outline-none resize-none focus:outline-none focus:border-transparent disabled:opacity-50 text-base leading-relaxed min-h-[44px] overflow-hidden"
                    style={{
                      height: "auto",
                      minHeight: window.innerWidth < 640 ? "44px" : "48px",
                    }}
                    onInput={(e) => {
                      const target = e.target as HTMLTextAreaElement;
                      target.style.height = "auto";
                      const lineHeight = 24;
                      const maxRows = 4;
                      const maxHeight = lineHeight * maxRows;

                      if (target.scrollHeight <= maxHeight) {
                        target.style.overflowY = "hidden";
                      } else {
                        target.style.overflowY = "auto";
                      }

                      target.style.height =
                        Math.min(target.scrollHeight, maxHeight) + "px";
                    }}
                  />
                </div>
                <div className="flex-none h-auto relative">
                  <button
                    type="submit"
                    disabled={isLoading || !input.trim()}
                    className="opacity-100 rounded-[15px] md:rounded-[20px] bg-gradient-to-r from-[#111111] to-[#111111] hover:from-[#494949] hover:to-[#494949] active:from-[#494949] active:to-[#494949] disabled:from-[#989897] disabled:to-[#989897] border border-solid border-[#989897] shadow-[0px_0.48175px_1.25255px_-1.16667px_rgba(0,0,0,0.1),0px_1.83083px_4.76015px_-2.33333px_rgba(0,0,0,0.09),0px_8px_20.8px_-3.5px_rgba(0,0,0,0.043),0px_-2px_9px_0px_inset_rgba(255,255,255,0.49),0px_0px_0px_2px_rgba(0,0,0,0.2)] flex flex-row flex-nowrap items-center self-center justify-center content-center gap-2 cursor-pointer h-[44px] px-[22px] md:px-[20px] py-[22px] md:py-[13px] relative overflow-visible disabled:cursor-not-allowed transition-all duration-200 hover:scale-[1.025] active:scale-[0.975] touch-manipulation"
                  >
                    <Send className="w-4 h-4 text-white" />
                    <span className="text-sm md:text-[15px] text-white font-urbanist font-medium hidden md:inline">
                      Ask Legal AI
                    </span>
                  </button>
                </div>
              </label>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
