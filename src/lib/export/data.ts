import image1 from "../../asset/img/image1.png";
import image2 from "../../asset/img/image2.png";
import image3 from "../../asset/img/image3.png";
import image4 from "../../asset/img/image4.png";
import image5 from "../../asset/img/image5.png";
import image6 from "../../asset/img/image6.png";
import image7 from "../../asset/img/image7.png";
import image8 from "../../asset/img/image8.png";
import simtong1 from "../../asset/img/simtong1.png";
import simtong2 from "../../asset/img/simtong2.png";
import simtong3 from "../../asset/img/simtong3.png";
import info1 from "../../asset/img/info1.png";
import info2 from "../../asset/img/info2.png";
import info3 from "../../asset/img/info3.png";
import info4 from "../../asset/img/info4.png";
import info5 from "../../asset/img/info5.png";
import stakanto1 from "../../asset/img/stakanto1.png";
import stakanto2 from "../../asset/img/stakanto2.png";
import stakanto3 from "../../asset/img/stakanto3.png";
import spectrum from "../../asset/img/spectrum.png";
import stretch1 from "../../asset/img/stretch1.png";
import stretch2 from "../../asset/img/stretch2.png";
import stretch3 from "../../asset/img/stretch3.png";
import stretch4 from "../../asset/img/stretch4.png";
import IBTI1 from "../../asset/img/IBTI1.png";
import IBTI2 from "../../asset/img/IBTI2.png";
import IBTI3 from "../../asset/img/IBTI3.png";
import IBTI4 from "../../asset/img/IBTI4.png";
import fighting1 from "../../asset/img/fighting1.png";
import fighting2 from "../../asset/img/fighting2.png";
import fighting3 from "../../asset/img/fighting3.png";
import activity1 from "../../asset/img/activity1.png";
import activity2 from "../../asset/img/activity2.png";
import activity3 from "../../asset/img/activity3.png";

export const imageList = [
  { url: image1, content: "Curiosity" },
  { url: image6, content: "Ideas" },
  { url: image7, content: "Problem Solve" },
  { url: image2, content: "Actice" },

  { url: image5, content: "Willingness" },
  { url: image4, content: "Communication" },
  { url: image8, content: "Cooperation" },
  { url: image3, content: "Patience" },
];

export const projects = [
  {
    imageList: [simtong1, simtong2, simtong3],
    title: "심통",
    subTitle: "사네 인트라넷 서비스",
    content:
      "심통은 대전의 유명 제과기업인 성심당과 계약하여 성사된 프로젝트로 성심당 사내 직원들을 위해 일정표 및 휴무표, 게시판, 식단표 기능이 삽입되어 있는 서비스입니다.",
    githubLink: "https://github.com/Team-ComIT",
    siteLink: "",
    develop: "\n  • 일정표 생성 및 삭제, 수정\n  • 휴무표 생성 및 삭제, 수정",
    tech: "Redux-Toolkit, TypeScript, Next.js",
    field: "FrontEnd",
  },
  {
    imageList: [info1, info2, info3, info4, info5],
    title: "Info",
    subTitle: "교내 채용 관리 플랫폼",
    content:
      "Info는 현장실습생 채용 의뢰를 웹 어플리케이션으로 전환하여 담당자 선생님께서\n부재중이실 때도 원활한 채용 프로세스 진행을 가능하게 해주는 서비스입니다.",
    githubLink: "https://github.com/info-dsm",
    siteLink: "https://info-dsm.info",
    develop:
      "\n  • 회사 및 모집공고 조회 페이지 개발\n  • 온보딩 페이지 및 마이페이지 개발",
    tech: "Next.js, TypeScript, Recoil, Cloudflare",
    field: "FrontEnd",
  },
  {
    imageList: [stakanto1, stakanto2, stakanto3],
    title: "Stakanto",
    subTitle: "음악 퀴즈 플랫폼",
    content:
      "Stakanto는 음악 퀴즈 플랫폼으로 사용자들이 음악에 대해서 어느정도 알고 있는 지 자신의 지식을 뽐낼 수 있는 데스크탑 앱입니다.",
    develop: "\n  • 사이트 디자인\n  • 메인 페이지 및 퀴즈 페이지 개발",
    tech: "Electron, React, TypeScript",
    githubLink: "https://github.com/DSM-Stakanto",
    siteLink: "",
    field: "PM, FrontEnd, Design",
  },
  {
    imageList: [spectrum],
    title: "Audio-Spectrum",
    subTitle: "3D 오디오 시각화 서비스",
    content:
      "해당 프로젝트는 기존에 있던 2D Audio-Spectrum의 이점을 극대화하여 만든\n프로젝트로 음악 파일에서 음향 데이터를 추출하여 제작한 서비스입니다.",
    develop: "\n  • 스펙트럼 개발\n  • GUI 삽입",
    tech: "React, Three.js, Webpack",
    githubLink: "https://github.com/eastcopper/audio-spectrum",
    siteLink: "",
    field: "PM, FrontEnd, Design",
  },
  {
    imageList: [stretch1, stretch2, stretch3, stretch4],
    title: "Stretch",
    subTitle: "유연근무제 출퇴근 관리 시스템",
    content:
      "KOSA-MIDAS-YOUNG-TALLENT-CHALLENGE 해커톤에서 제작된 프로젝트로 유연근무제 출퇴근을 더 쉽게 관리할 수 있도록 만든 서비스이며, 2등을 수상하였습니다.",
    develop:
      "\n  • 일정 관리 페이지 개발,\n  • 근무 현황 조회 및 직원 관리 페이지 개발\n  • 온보딩 페이지 개발",
    tech: "Redux-Toolkit, React, JavaScript",
    githubLink: "https://github.com/MIDAS-Hackathon-team14",
    siteLink: "",
    field: "FrontEnd",
  },
  {
    imageList: [IBTI1, IBTI2, IBTI3, IBTI4],
    title: "IBTI",
    subTitle: "관심사 매칭 서비스",
    content:
      "IBTI는 S/W 마이스터고 연합 해커톤에서 개발한 프로젝트로 MBTI를 구현해 관심사를 찾고 관심사가 맞는 사람끼리 채팅할 수 있는 웹 서비스입니다.",
    develop: "\n  • 메인 페이지 및 IBTI 검사 페이지\n  • 채팅 페이지",
    tech: "Socket.io, React, JavaScript",
    githubLink: "https://github.com/IBTI-softwaremeister",
    siteLink: "",
    field: "PM, FrontEnd, BackEnd",
  },
  {
    imageList: [fighting1, fighting2, fighting3],
    title: "Fighting Game",
    subTitle: "격투 게임 서비스",
    content:
      "해당 프로젝트는 격투 게임을 웹 어플리케이션으로 구현함으로써 접근성을 줄이고\n언제 어디서나 즐길 수 있도록 만든 서비스입니다.",
    develop: "\n  • 캐릭터 셀렉트 페이지\n  • 게임 페이지",
    tech: "React, TypeScript",
    githubLink: "https://github.com/eastcopper/fighting_game",
    siteLink: "https://eastcopper-fighting-game.netlify.app",
    field: "Individual Project",
  },
];

export const ActivityImageList = [activity3, , activity2, , activity1];
export const ActivityContent = [
  "KOSA-MIDAS YOUNG TALENT CHALLENGE\n  2등 마이다스인 대표이사상 수상",
  "소프트웨이브 부스 운영",
  "22회 앱잼 해커톤 대회\n  우수상(2등) 수상",
];
