import {FaPersonWalking} from "react-icons/fa6";
import {FaCrown} from "react-icons/fa";
import {RiTeamFill} from "react-icons/ri";

export const plansData = [
  {
    icon: <FaPersonWalking />,
    name: "Biggner",
    price: "¥5,000",
    features: [
      "2hの個別レッスン",
      "コートの無料貸し出し",
      "道具も全て貸し出します",
    ],
  },

  {
    icon: <FaCrown />,
    name: "Master",
    price: "¥30,000",
    features: [
      "5hの個別レッスン",
      "施設内全て無料開放",
      "実績者によるコーチング",
      "大会への無料エントリー",
    ],
  },

  {
    icon: <RiTeamFill />,
    name: "Specialist",
    price: "¥50,000",
    features: [
      "8hの個別レッスン",
      "施設内全て無料開放",
      "元大会入賞プロによるコーチング",
      "世界を目指して",
    ],
  },
];
