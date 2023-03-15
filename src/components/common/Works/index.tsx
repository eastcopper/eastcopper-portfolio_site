import * as S from "./style";

const Works = () => {
  return (
    <>
      <S.MainDiv>
        <S.DesignHr rotate={90} translateX={44} top={"0%"} width={400}/>
        {/* <S.DesignHr rotate={0} translateX={120} top={"90%"} width={900}/> */}
        <S.RotateDiv>Works</S.RotateDiv>
        <div>
          <div>{`대덕소프트웨어\n마이스터고등학교 3학년 이동현입니다.`}</div>
          <video muted loop autoPlay>
            <source src="/video/coding.mp4" type="video/mp4" />
          </video>
        </div>
      </S.MainDiv>
    </>
  );
};

export default Works;
