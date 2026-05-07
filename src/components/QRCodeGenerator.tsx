import { QRCodeSVG } from "qrcode.react";

export const PortfolioQR = () => {
  return (
    <div className="flex flex-col items-center p-6 bg-card border border-border rounded-[24px]">
      <h3 className="text-lg font-display mb-4 text-gradient-silver">Scan to View Portfolio</h3>
      <QRCodeSVG
        value="https://your-portfolio-url.com" // Put your actual live link here
        size={200}
        bgColor={"#ffffff"}
        fgColor={"#000000"}
        level={"H"}
        includeMargin={true}
        imageSettings={{
          src: "/techthinkers-logo.png",
          x: undefined,
          y: undefined,
          height: 40,
          width: 40,
          excavate: true,
        }}
      />
      <p className="mt-4 text-xs text-muted-foreground uppercase tracking-widest">
        Tech Thinkers · Addis Ababa
      </p>
    </div>
  );
};
