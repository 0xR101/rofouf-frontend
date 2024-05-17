import { serverRoot } from "../../constants/backend";

function Ad() {
  const image = `${serverRoot}/ad/ad.png`
  return (
    <>
      <div
        style={{
          width: "100%",
          overflow: "hidden",
          marginTop: "20px",
        }}
      >
        <img
          style={{
            width: "100%",
            height: "auto",
            display: "block",
          }}
          src={image}
          alt="can not laod the image"
        />
      </div>
    </>
  );
}


export default Ad;