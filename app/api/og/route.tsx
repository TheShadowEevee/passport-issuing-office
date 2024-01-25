import { ImageResponse } from "next/og";

export const runtime = "edge";

function Description({ title, content }: { title: string; content?: string }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          color: "#4A2AA6",
          fontFamily: '"Inter"',
          fontSize: "24px",
          fontStyle: "normal",
          fontWeight: 500,
          lineHeight: "normal",
          letterSpacing: "1.92px",
          textTransform: "uppercase",
        }}
      >
        {title}
      </div>
      <div
        style={{
          color: "#000000",
          fontFamily: '"OCR B Pro"',
          fontSize: "33px",
          fontStyle: "normal",
          fontWeight: 500,
          lineHeight: "normal",
          letterSpacing: "4.785px",
          textTransform: "uppercase",
        }}
      >
        {content}
      </div>
    </div>
  );
}

function Footer({
  topLine,
  bottomLine,
}: {
  topLine: string;
  bottomLine: string;
}) {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          color: "#4A2BA6",
          textAlign: "center",
          fontFamily: '"OCR B Pro"',
          fontSize: "36px",
          fontStyle: "normal",
          fontWeight: 500,
          lineHeight: "normal",
          letterSpacing: "4.86px",
          textTransform: "uppercase",
        }}
      >
        {topLine}
      </div>
      <div
        style={{
          color: "#4A2BA6",
          textAlign: "center",
          fontFamily: '"OCR B Pro"',
          fontSize: "36px",
          fontStyle: "normal",
          fontWeight: 500,
          lineHeight: "normal",
          letterSpacing: "4.86px",
          textTransform: "uppercase",
        }}
      >
        {bottomLine}
      </div>
    </div>
  );
}

export async function GET(
  request: Request,
  { params }: { params: { name: string; origin: string; dob: string } }
) {
  const interFontData = await fetch(
    new URL("../../../assets/Inter.ttf", import.meta.url)
  ).then((res) => res.arrayBuffer());

  const OCRBProFontData = await fetch(
    new URL("../../../assets/OCRBPro.ttf", import.meta.url)
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 40,
          fontFamily: '"Inter"',
          color: "black",
          backgroundImage: `url('https://doggo.ninja/fVcYpE.png')`,
          backgroundSize: "100% 100%",
          width: "100%",
          height: "100%",
          padding: "48px 72px",
          display: "flex",
          flexDirection: "column",
          gap: 16,
        }}
      >
        <div
          style={{
            fontSize: 40,
            display: "flex",
            flexDirection: "column",
            gap: 24,
          }}
        >
          <div
            style={{
              fontSize: 40,
              display: "flex",
              flexDirection: "row",
              gap: 16,
            }}
          >
            <Description title="TYPE" content={"PH"} />
            <Description title="CODE" content={"HAK"} />
            <Description title="NO." content={"0000"} />
          </div>
          <Description title="SURNAME" content={"HACKER"} />
          <Description title="GIVEN NAME" content={"WACK"} />
          <Description title="NATIONALITY" content={"REPUBLIC OF HACKERLAND"} />
          <div
            style={{
              fontSize: 40,
              display: "flex",
              flexDirection: "row",
              gap: 16,
            }}
          >
            <Description title="DATE OF BIRTH" content={"06 APR 1200"} />
            <Description title="PLACE OF ORIGIN" content={"THE DEEP SEA"} />
          </div>
          <div
            style={{
              fontSize: 40,
              display: "flex",
              flexDirection: "row",
              gap: 16,
            }}
          >
            <Description title="DATE OF ISSUE" content={"12 NOV 2023"} />
            <Description title="DATE OF EXPIRATION" content={"01 JAN 3023"} />
          </div>
          <Description title="AUTHORITY" content={"ID.PURDUEHACKERS.COM"} />
        </div>
        <Footer
          topLine="P<HAKHACKER<WACK<<<<<<<<<<<<<<<<<<<<<<<<<<<"
          bottomLine="E042901AA3USA3299FF47983<<<<<<<<<<<<<<<<069"
        />
      </div>
    ),
    {
      width: 1416,
      height: 996,
      fonts: [
        {
          name: "Inter",
          data: interFontData,
          style: "normal",
        },
        {
          name: "OCR B Pro",
          data: OCRBProFontData,
          style: "normal",
        },
      ],
    }
  );
}
