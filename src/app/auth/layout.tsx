import Footer from "@/components/footer";
import Header from "@/components/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <main className=" min-h-[100vh] w-full relative flex flex-col flex-nowrap items-center justify-start gap-0 h-min overflow-visible bg-[#fefefe]">
        <div
          className="absolute left-0 right-0 top-0 z-[1] flex flex-row flex-nowrap items-center justify-center gap-[10px] min-h-[350px] h-min overflow-hidden p-0 cursor-none"
          data-framer-name="Light"
        >
          <div
            className="absolute left-[-100px] md:left-[-120px] lg:left-[-80px] top-[-100px] md:top-[-100px] lg:top-[-70px] z-[1] w-[434px] scale-90 md:scale-50 lg:scale-0 h-auto flex-none cursor-none"
            style={{ transform: "rotateY(180deg)" }}
          >
            <div
              className="relative h-[331px] w-full overflow-hidden opacity-100"
              data-framer-name="Variant 1"
            >
              <div
                className="absolute right-[31px] top-[-48px] flex flex-row flex-nowrap items-center justify-center gap-[10px] h-[124px] w-[280px] overflow-hidden p-0 blur-[35px] opacity-100"
                data-framer-name="Wide Elipse"
              >
                <div
                  data-framer-component-type="SVG"
                  data-framer-name="Ellipse 1227"
                  className="relative h-[69px] w-[302px] flex-shrink-0 image-pixelated fill-black text-black opacity-100"
                  aria-hidden="true"
                >
                  <div className="w-full h-full [aspect-ratio:inherit]">
                    <svg
                      className="w-full h-full"
                      viewBox="0 0 302 69"
                      preserveAspectRatio="none"
                      width="100%"
                      height="100%"
                    >
                      <use href="#svg656739424_398"></use>
                    </svg>
                  </div>
                </div>
              </div>
              <div
                className="filter blur-[50px] opacity-100 flex flex-row flex-nowrap items-center justify-center content-center gap-[10px] h-[257px] w-[298px] p-0 overflow-hidden flex-none absolute right-[-151px] top-[-86px]"
                data-framer-name="Elipse 1"
              >
                <div
                  data-framer-component-type="SVG"
                  data-framer-name="Ellipse 1230"
                  aria-hidden="true"
                  className="flex-none h-[205px] w-[303px] relative shrink-0 opacity-100"
                  style={{
                    imageRendering: "pixelated",
                    backgroundSize: "100% 100%",
                    backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 303 205'><path d='M 302.247 102.971 C 302.247 46.638 234.759 0.971 151.509 0.971 C 68.259 0.971 0.771 46.638 0.771 102.971 C 0.771 159.304 68.259 204.971 151.509 204.971 C 234.759 204.971 302.247 159.304 302.247 102.971 Z' fill='rgb(255,150,55)'></path></svg>")`,
                  }}
                ></div>
              </div>
              <div
                data-framer-name="Elipse 2"
                className="flex flex-none flex-row flex-nowrap items-center justify-center gap-[10px] h-min w-min p-0 overflow-visible absolute right-[50px] top-[-100px] opacity-100"
                style={{
                  filter: "blur(50px)",
                  alignContent: "center",
                }}
              >
                <div
                  data-framer-component-type="SVG"
                  data-framer-name="Ellipse 1229"
                  aria-hidden="true"
                  className="flex-none relative w-[288px] h-[350px] opacity-100"
                  style={{
                    imageRendering: "pixelated",
                    flexShrink: 0,
                    backgroundSize: "100% 100%",
                    backgroundImage: `url("data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20viewBox%3D%220%200%20288%20350%22%3E%3Cpath%20d%3D%22M%2067.298%20-8.305%20C%2013.754%209.199%20-8.682%2087.536%2017.187%20166.666%20C%2043.055%20245.795%20107.432%20295.752%20160.976%20278.247%20C%20214.521%20260.743%20236.957%20182.406%20211.088%20103.276%20C%20185.22%2024.147%20120.843%20-25.81%2067.298%20-8.305%20Z%22%20fill%3D%22rgb(255%2C%20133%2C%2046)%22%20opacity%3D%220.7%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E")`,
                  }}
                ></div>
              </div>
              <div
                className="flex flex-row flex-nowrap items-center justify-center gap-[10px] h-[199px] w-[87px] overflow-hidden p-0 absolute top-[-32px] right-[-6px] opacity-60"
                data-framer-name="Light Elipse 1"
              >
                <div
                  data-framer-name="Ellipse"
                  className="relative flex-none w-[18px] h-[221px] rounded-full opacity-100 blur-[3.5px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.25)] [transform:rotate(-20deg)] [background:linear-gradient(180.148deg,_rgb(254,236,173)_-18%,_rgba(255,154,58,0)_80%)]"
                ></div>
              </div>
              <div
                className="absolute flex flex-row flex-nowrap items-center justify-center gap-[10px] overflow-hidden p-0 blur-[8px] opacity-100 h-[312px] w-[124px] left-[calc(48.47826086956524%_-_124.31040564373899px/2)] top-[-56px]"
                data-framer-name="Light 3"
              >
                <div
                  data-framer-component-type="SVG"
                  data-framer-name="Rectangle 8416"
                  aria-hidden="true"
                  className="relative flex-none opacity-100 h-[337px] w-[134px]"
                  style={{
                    imageRendering: "pixelated",
                    backgroundSize: "100% 100%",
                    backgroundImage: `url("data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20viewBox%3D%220%200%20134%20337%22%3E%3Cg%20transform%3D%22translate(-5.348%203.814)%22%20id%3D%22ss10604335348_1%22%3E%3Cg%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22idss10604335348_2g-1542099540%22%20x1%3D%220.4264316751230792%22%20x2%3D%220.5735683248769208%22%20y1%3D%225.551115123125783e-17%22%20y2%3D%221%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22rgb(255%2C%20229%2C%20138)%22%20stop-opacity%3D%221%22%3E%3C%2Fstop%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22rgb(255%2C%20255%2C%20254)%22%20stop-opacity%3D%221%22%3E%3C%2Fstop%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Cpath%20d%3D%22M%200%201.686%20L%2057.542%200%20L%20138.779%20325.564%20L%2056%20322.686%20Z%22%20fill%3D%22url(%23idss10604335348_2g-1542099540)%22%3E%3C%2Fpath%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E")`,
                  }}
                ></div>
              </div>
              <div
                className="    flex    items-center    justify-center    flex-row    flex-nowrap    gap-[10px]    h-[304px]    w-[125px]    absolute    left-[90px]    top-[-50px]    p-0    overflow-hidden    blur-[6px]    rotate-[7deg]    opacity-100  "
                data-framer-name="Light 2"
              >
                <div
                  data-framer-component-type="SVG"
                  data-framer-name="Rectangle 8417"
                  aria-hidden="true"
                  className="    relative    w-[135px]    h-[328px]    flex-none    opacity-100    shrink-0    bg-cover    image-pixelated  "
                  style={{
                    backgroundImage: `url("data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20viewBox%3D%220%200%20135%20328%22%3E%3Cg%20transform%3D%22translate(8.105%204.635)%22%20id%3D%22ss12683010313_1%22%3E%3Cg%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22idss12683010313_2g-1542099540%22%20x1%3D%220.4264316751230792%22%20x2%3D%220.5735683248769208%22%20y1%3D%225.551115123125783e-17%22%20y2%3D%221%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22rgb(255%2C%20229%2C%20138)%22%20stop-opacity%3D%221%22%3E%3C%2Fstop%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22rgb(255%2C%20255%2C%20254)%22%20stop-opacity%3D%221%22%3E%3C%2Fstop%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Cpath%20d%3D%22M%200%204.039%20L%2021.242%200%20L%20126.564%20312.485%20L%2089.893%20313.79%20Z%22%20fill%3D%22url(%23idss12683010313_2g-1542099540)%22%3E%3C%2Fpath%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E")`,
                    backgroundSize: "100% 100%",
                  }}
                ></div>
              </div>
              <div
                data-framer-name="Light"
                className="absolute right-[61px] top-[-62px] flex flex-row items-center justify-center gap-[10px] h-[304px] w-[125px] overflow-hidden p-0 filter blur-[10px] opacity-60"
              >
                <div
                  data-framer-component-type="SVG"
                  data-framer-name="Rectangle"
                  aria-hidden="true"
                  className="relative w-[135px] h-[328px] flex-none opacity-100"
                  style={{
                    imageRendering: "pixelated",
                    backgroundSize: "100% 100%",
                    backgroundImage: `url("data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20viewBox%3D%220%200%20135%20328%22%3E%3Cg%20transform%3D%22translate(8.105%204.635)%22%20id%3D%22ss12683010313_1%22%3E%3Cg%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22idss12683010313_2g-1542099540%22%20x1%3D%220.4264316751230792%22%20x2%3D%220.5735683248769208%22%20y1%3D%225.551115123125783e-17%22%20y2%3D%221%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22rgb(255%2C%20229%2C%20138)%22%20stop-opacity%3D%221%22%3E%3C%2Fstop%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22rgb(255%2C%20255%2C%20254)%22%20stop-opacity%3D%221%22%3E%3C%2Fstop%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Cpath%20d%3D%22M%200%204.039%20L%2021.242%200%20L%20126.564%20312.485%20L%2089.893%20313.79%20Z%22%20fill%3D%22url(%23idss12683010313_2g-1542099540)%22%3E%3C%2Fpath%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E")`,
                  }}
                ></div>
              </div>
              <div
                data-framer-name="Light"
                className="flex flex-row flex-nowrap items-center justify-center gap-[10px] h-[175px] w-[72px] overflow-hidden p-0 absolute right-[123px] top-[61px] opacity-60 blur-[8px]"
              >
                <div
                  data-framer-component-type="SVG"
                  data-framer-name="Rectangle"
                  aria-hidden="true"
                  className="relative w-[90px] h-[218px] flex-none opacity-100"
                  style={{
                    imageRendering: "pixelated",
                    flexShrink: 0,
                    backgroundSize: "100% 100%",
                    backgroundImage: `url("data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20viewBox%3D%220%200%2090%20218%22%3E%3Cg%20transform%3D%22translate(22.132%204.388)%22%20id%3D%22ss8822116575_1%22%3E%3Cg%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22idss8822116575_2g-1892407787%22%20x1%3D%220.33577487887860163%22%20x2%3D%220.6642251211213983%22%20y1%3D%220%22%20y2%3D%221%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22rgb(250%2C%20208%2C%20162)%22%20stop-opacity%3D%221%22%3E%3C%2Fstop%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22rgb(255%2C%20255%2C%20255)%22%20stop-opacity%3D%221%22%3E%3C%2Fstop%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Cpath%20d%3D%22M%200.077%2011.566%20L%200%200%20L%2053%20208.131%20L%2034.547%20209%20Z%22%20transform%3D%22translate(5.433%20-1.53)%20rotate(-3%2026.5%20104.5)%22%20fill%3D%22url(%23idss8822116575_2g-1892407787)%22%3E%3C%2Fpath%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E")`,
                  }}
                ></div>
              </div>
              <div
                data-framer-name="Light"
                className="absolute right-[27px] top-[36px] w-[72px] h-[175px] flex flex-row items-center justify-center gap-[10px] overflow-hidden p-0 blur-[8px] opacity-60 rotate-[-5deg]"
              >
                <div
                  data-framer-component-type="SVG"
                  data-framer-name="Rectangle"
                  aria-hidden="true"
                  className="relative w-[90px] h-[218px] flex-none opacity-100"
                  style={{
                    backgroundImage: `url("data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20viewBox%3D%220%200%2090%20218%22%3E%3Cg%20transform%3D%22translate(22.132%204.388)%22%20id%3D%22ss9734080374_1%22%3E%3Cg%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22idss9734080374_2g-1892407787%22%20x1%3D%220.33577487887860163%22%20x2%3D%220.6642251211213983%22%20y1%3D%220%22%20y2%3D%221%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22rgb(250%2C%20208%2C%20162)%22%20stop-opacity%3D%221%22%3E%3C%2Fstop%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22rgb(255%2C%20255%2C%20255)%22%20stop-opacity%3D%221%22%3E%3C%2Fstop%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Cpath%20d%3D%22M%200.077%2011.566%20L%200%200%20L%2053%20208.131%20L%2034.547%20209%20Z%22%20transform%3D%22translate(5.433%20-1.53)%20rotate(-3%2026.5%20104.5)%22%20fill%3D%22url(%23idss9734080374_2g-1892407787)%22%3E%3C%2Fpath%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E")`,
                    backgroundSize: "100% 100%",
                    imageRendering: "pixelated",
                  }}
                ></div>
              </div>
            </div>
          </div>
          <div className="absolute right-[-182px] md:right-[-120px] lg:right-[-80px] top-[-100px] md:top-[-100px] lg:top-[-70px] z-[1] w-[434px] scale-[0.49] md:scale-50 lg:scale-0 h-auto flex-none cursor-none">
            <div
              className="relative h-[331px] w-full overflow-hidden opacity-100"
              data-framer-name="Variant 1"
            >
              <div
                className="absolute right-[31px] top-[-48px] flex flex-row flex-nowrap items-center justify-center gap-[10px] h-[124px] w-[280px] overflow-hidden p-0 blur-[35px] opacity-100"
                data-framer-name="Wide Elipse"
              >
                <div
                  data-framer-component-type="SVG"
                  data-framer-name="Ellipse 1227"
                  className="relative h-[69px] w-[302px] flex-shrink-0 image-pixelated fill-black text-black opacity-100"
                  aria-hidden="true"
                >
                  <div className="w-full h-full [aspect-ratio:inherit]">
                    <svg
                      className="w-full h-full"
                      viewBox="0 0 302 69"
                      preserveAspectRatio="none"
                      width="100%"
                      height="100%"
                    >
                      <use href="#svg656739424_398"></use>
                    </svg>
                  </div>
                </div>
              </div>
              <div
                className="filter blur-[50px] opacity-100 flex flex-row flex-nowrap items-center justify-center content-center gap-[10px] h-[257px] w-[298px] p-0 overflow-hidden flex-none absolute right-[-151px] top-[-86px]"
                data-framer-name="Elipse 1"
              >
                <div
                  data-framer-component-type="SVG"
                  data-framer-name="Ellipse 1230"
                  aria-hidden="true"
                  className="flex-none h-[205px] w-[303px] relative shrink-0 opacity-100"
                  style={{
                    imageRendering: "pixelated",
                    backgroundSize: "100% 100%",
                    backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 303 205'><path d='M 302.247 102.971 C 302.247 46.638 234.759 0.971 151.509 0.971 C 68.259 0.971 0.771 46.638 0.771 102.971 C 0.771 159.304 68.259 204.971 151.509 204.971 C 234.759 204.971 302.247 159.304 302.247 102.971 Z' fill='rgb(255,150,55)'></path></svg>")`,
                  }}
                ></div>
              </div>
              <div
                data-framer-name="Elipse 2"
                className="flex flex-none flex-row flex-nowrap items-center justify-center gap-[10px] h-min w-min p-0 overflow-visible absolute right-[50px] top-[-100px] opacity-100"
                style={{
                  filter: "blur(50px)",
                  alignContent: "center",
                }}
              >
                <div
                  data-framer-component-type="SVG"
                  data-framer-name="Ellipse 1229"
                  aria-hidden="true"
                  className="flex-none relative w-[288px] h-[350px] opacity-100"
                  style={{
                    imageRendering: "pixelated",
                    flexShrink: 0,
                    backgroundSize: "100% 100%",
                    backgroundImage: `url("data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20viewBox%3D%220%200%20288%20350%22%3E%3Cpath%20d%3D%22M%2067.298%20-8.305%20C%2013.754%209.199%20-8.682%2087.536%2017.187%20166.666%20C%2043.055%20245.795%20107.432%20295.752%20160.976%20278.247%20C%20214.521%20260.743%20236.957%20182.406%20211.088%20103.276%20C%20185.22%2024.147%20120.843%20-25.81%2067.298%20-8.305%20Z%22%20fill%3D%22rgb(255%2C%20133%2C%2046)%22%20opacity%3D%220.7%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E")`,
                  }}
                ></div>
              </div>
              <div
                className="flex flex-row flex-nowrap items-center justify-center gap-[10px] h-[199px] w-[87px] overflow-hidden p-0 absolute top-[-32px] right-[-6px] opacity-60"
                data-framer-name="Light Elipse 1"
              >
                <div
                  data-framer-name="Ellipse"
                  className="relative flex-none w-[18px] h-[221px] rounded-full opacity-100 blur-[3.5px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.25)] [transform:rotate(-20deg)] [background:linear-gradient(180.148deg,_rgb(254,236,173)_-18%,_rgba(255,154,58,0)_80%)]"
                ></div>
              </div>
              <div
                className="absolute flex flex-row flex-nowrap items-center justify-center gap-[10px] overflow-hidden p-0 blur-[8px] opacity-100 h-[312px] w-[124px] left-[calc(48.47826086956524%_-_124.31040564373899px/2)] top-[-56px]"
                data-framer-name="Light 3"
              >
                <div
                  data-framer-component-type="SVG"
                  data-framer-name="Rectangle 8416"
                  aria-hidden="true"
                  className="relative flex-none opacity-100 h-[337px] w-[134px]"
                  style={{
                    imageRendering: "pixelated",
                    backgroundSize: "100% 100%",
                    backgroundImage: `url("data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20viewBox%3D%220%200%20134%20337%22%3E%3Cg%20transform%3D%22translate(-5.348%203.814)%22%20id%3D%22ss10604335348_1%22%3E%3Cg%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22idss10604335348_2g-1542099540%22%20x1%3D%220.4264316751230792%22%20x2%3D%220.5735683248769208%22%20y1%3D%225.551115123125783e-17%22%20y2%3D%221%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22rgb(255%2C%20229%2C%20138)%22%20stop-opacity%3D%221%22%3E%3C%2Fstop%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22rgb(255%2C%20255%2C%20254)%22%20stop-opacity%3D%221%22%3E%3C%2Fstop%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Cpath%20d%3D%22M%200%201.686%20L%2057.542%200%20L%20138.779%20325.564%20L%2056%20322.686%20Z%22%20fill%3D%22url(%23idss10604335348_2g-1542099540)%22%3E%3C%2Fpath%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E")`,
                  }}
                ></div>
              </div>
              <div
                className="    flex    items-center    justify-center    flex-row    flex-nowrap    gap-[10px]    h-[304px]    w-[125px]    absolute    left-[90px]    top-[-50px]    p-0    overflow-hidden    blur-[6px]    rotate-[7deg]    opacity-100  "
                data-framer-name="Light 2"
              >
                <div
                  data-framer-component-type="SVG"
                  data-framer-name="Rectangle 8417"
                  aria-hidden="true"
                  className="    relative    w-[135px]    h-[328px]    flex-none    opacity-100    shrink-0    bg-cover    image-pixelated  "
                  style={{
                    backgroundImage: `url("data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20viewBox%3D%220%200%20135%20328%22%3E%3Cg%20transform%3D%22translate(8.105%204.635)%22%20id%3D%22ss12683010313_1%22%3E%3Cg%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22idss12683010313_2g-1542099540%22%20x1%3D%220.4264316751230792%22%20x2%3D%220.5735683248769208%22%20y1%3D%225.551115123125783e-17%22%20y2%3D%221%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22rgb(255%2C%20229%2C%20138)%22%20stop-opacity%3D%221%22%3E%3C%2Fstop%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22rgb(255%2C%20255%2C%20254)%22%20stop-opacity%3D%221%22%3E%3C%2Fstop%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Cpath%20d%3D%22M%200%204.039%20L%2021.242%200%20L%20126.564%20312.485%20L%2089.893%20313.79%20Z%22%20fill%3D%22url(%23idss12683010313_2g-1542099540)%22%3E%3C%2Fpath%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E")`,
                    backgroundSize: "100% 100%",
                  }}
                ></div>
              </div>
              <div
                data-framer-name="Light"
                className="absolute right-[61px] top-[-62px] flex flex-row items-center justify-center gap-[10px] h-[304px] w-[125px] overflow-hidden p-0 filter blur-[10px] opacity-60"
              >
                <div
                  data-framer-component-type="SVG"
                  data-framer-name="Rectangle"
                  aria-hidden="true"
                  className="relative w-[135px] h-[328px] flex-none opacity-100"
                  style={{
                    imageRendering: "pixelated",
                    backgroundSize: "100% 100%",
                    backgroundImage: `url("data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20viewBox%3D%220%200%20135%20328%22%3E%3Cg%20transform%3D%22translate(8.105%204.635)%22%20id%3D%22ss12683010313_1%22%3E%3Cg%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22idss12683010313_2g-1542099540%22%20x1%3D%220.4264316751230792%22%20x2%3D%220.5735683248769208%22%20y1%3D%225.551115123125783e-17%22%20y2%3D%221%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22rgb(255%2C%20229%2C%20138)%22%20stop-opacity%3D%221%22%3E%3C%2Fstop%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22rgb(255%2C%20255%2C%20254)%22%20stop-opacity%3D%221%22%3E%3C%2Fstop%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Cpath%20d%3D%22M%200%204.039%20L%2021.242%200%20L%20126.564%20312.485%20L%2089.893%20313.79%20Z%22%20fill%3D%22url(%23idss12683010313_2g-1542099540)%22%3E%3C%2Fpath%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E")`,
                  }}
                ></div>
              </div>
              <div
                data-framer-name="Light"
                className="flex flex-row flex-nowrap items-center justify-center gap-[10px] h-[175px] w-[72px] overflow-hidden p-0 absolute right-[123px] top-[61px] opacity-60 blur-[8px]"
              >
                <div
                  data-framer-component-type="SVG"
                  data-framer-name="Rectangle"
                  aria-hidden="true"
                  className="relative w-[90px] h-[218px] flex-none opacity-100"
                  style={{
                    imageRendering: "pixelated",
                    flexShrink: 0,
                    backgroundSize: "100% 100%",
                    backgroundImage: `url("data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20viewBox%3D%220%200%2090%20218%22%3E%3Cg%20transform%3D%22translate(22.132%204.388)%22%20id%3D%22ss8822116575_1%22%3E%3Cg%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22idss8822116575_2g-1892407787%22%20x1%3D%220.33577487887860163%22%20x2%3D%220.6642251211213983%22%20y1%3D%220%22%20y2%3D%221%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22rgb(250%2C%20208%2C%20162)%22%20stop-opacity%3D%221%22%3E%3C%2Fstop%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22rgb(255%2C%20255%2C%20255)%22%20stop-opacity%3D%221%22%3E%3C%2Fstop%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Cpath%20d%3D%22M%200.077%2011.566%20L%200%200%20L%2053%20208.131%20L%2034.547%20209%20Z%22%20transform%3D%22translate(5.433%20-1.53)%20rotate(-3%2026.5%20104.5)%22%20fill%3D%22url(%23idss8822116575_2g-1892407787)%22%3E%3C%2Fpath%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E")`,
                  }}
                ></div>
              </div>
              <div
                data-framer-name="Light"
                className="absolute right-[27px] top-[36px] w-[72px] h-[175px] flex flex-row items-center justify-center gap-[10px] overflow-hidden p-0 blur-[8px] opacity-60 rotate-[-5deg]"
              >
                <div
                  data-framer-component-type="SVG"
                  data-framer-name="Rectangle"
                  aria-hidden="true"
                  className="relative w-[90px] h-[218px] flex-none opacity-100"
                  style={{
                    backgroundImage: `url("data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20viewBox%3D%220%200%2090%20218%22%3E%3Cg%20transform%3D%22translate(22.132%204.388)%22%20id%3D%22ss9734080374_1%22%3E%3Cg%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22idss9734080374_2g-1892407787%22%20x1%3D%220.33577487887860163%22%20x2%3D%220.6642251211213983%22%20y1%3D%220%22%20y2%3D%221%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22rgb(250%2C%20208%2C%20162)%22%20stop-opacity%3D%221%22%3E%3C%2Fstop%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22rgb(255%2C%20255%2C%20255)%22%20stop-opacity%3D%221%22%3E%3C%2Fstop%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Cpath%20d%3D%22M%200.077%2011.566%20L%200%200%20L%2053%20208.131%20L%2034.547%20209%20Z%22%20transform%3D%22translate(5.433%20-1.53)%20rotate(-3%2026.5%20104.5)%22%20fill%3D%22url(%23idss9734080374_2g-1892407787)%22%3E%3C%2Fpath%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E")`,
                    backgroundSize: "100% 100%",
                    imageRendering: "pixelated",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        <Header />
        {children}
        <Footer />
      </main>
    </div>
  );
}
