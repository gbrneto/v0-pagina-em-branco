export default function Page() {
  return (
    <>
      <smart-player style={{ display: "block", margin: "0 auto", width: "100%" }} />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function(){
              var s=document.createElement("script");
              s.src="https://pg.brightcarty.com/gfxxtm2ntu/player.js";
              s.defer=true;
              document.head.appendChild(s);
            })();
          `,
        }}
      />
    </>
  )
}
