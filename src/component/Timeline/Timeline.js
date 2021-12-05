import EventCard from "./EventCard";
import EventPhote0 from "../../img/event0.jpg";
import EventPhote1 from "../../img/event1.jpg";
import EventPhote2 from "../../img/event2.jpg";
import EventPhote3 from "../../img/event3.jpg";
import EventPhote4 from "../../img/event4.jpg";
import EventPhote5 from "../../img/event5.jpg";
import EventPhote6 from "../../img/top_bg.jpg";

const msgList = [
  "使用緣圈兩年多，與妳的相遇是再普通不過的那種。\n依稀記得你的興趣是塗鴉和唱歌，我喜歡跟我一樣愛唱歌的女生，愛唱歌就給圈，哈這就是緣分吧～\n我分享的生活瑣事，你都很捧場，剛好無敵破壞王2要上映了，想說找你一起看看。\n現在想想才覺得你當初答應我的邀約還蠻不可思議的，畢竟你總是會擔心很多，何況是跟網友見面XD",
  "約會前幾天，我反覆看妳的FB和Youtube，我不太確定妳是不是我喜歡的類型。直到見到本人，跟照片的感覺差很多，本人很可愛！！！是我的菜～\n妳也知道我不是很會聊天、交際的人，跟你聊天雖然還是讓我有點緊張，但好像不會那麼有一句沒一句的。\n那天一直到妳上班前，我才依依不捨的結束與妳的第一次約會。每次想起這天，依然會身陷粉紅色泡泡中。",
  "沒多久便迎接了妳的生日，我喜歡驚喜，也喜歡給別人驚喜，只給喜歡的人驚喜。我覺得手做卡片超有心，而且又想充分展現自己的特色，所以做了這樣的卡片。\n喜歡看到妳因為我的驚喜而開心的樣子，每一次的驚喜，總是花上我許多時間，畢竟我的創意有限，還有點選擇障礙，又不喜歡做太簡單的東西，我總是想了很多種方案但始終覺得不夠好或拿不定主意，包含現在XD，這就是為什麼我覺得求婚很重要但是又總是還沒準備好的原因。",
  "那天我們一起逛了夜市，人潮有點擁擠，不知哪來的勇氣，假裝怕妳走散所以牽起妳的手。",
  "",
  "",
  ""
];

const Timeline = () => (
  <div className="timeline">
    <div className="line" data-aos="zoom-in" data-aos-duration="700"></div>
    <EventCard side="left" photo={EventPhote0} title="相遇" date="NOVEMBER, 2018" msg={msgList[0]}></EventCard>
    <EventCard side="right" photo={EventPhote1} title="第一次約會 - 無敵破壞王2" date="NOVEMBER 29, 2018" msg={msgList[1]}></EventCard>
    <EventCard side="left" photo={EventPhote2} title="Fish 生日" date="DECEMBER 3, 2018" msg={msgList[2]}></EventCard>
    <EventCard side="right" photo={EventPhote3} title="正式交往" date="DECEMBER 9, 2018" msg={msgList[3]}></EventCard>
    <EventCard side="left" photo={EventPhote4} title="提親" date="FEBRUARY 28, 2021" msg={msgList[4]}></EventCard>
    <EventCard side="right" photo={EventPhote6} title="結婚登記" date="MAY 25, 2021" msg={msgList[5]}></EventCard>
    <EventCard side="left"  title="?" date="DECEMBER 3, 2021" msg=""></EventCard>
    <EventCard side="right" photo={EventPhote5} title="喜宴" date="DECEMBER 19, 2021" msg={msgList[6]}></EventCard>
  </div>
);

export default Timeline;
