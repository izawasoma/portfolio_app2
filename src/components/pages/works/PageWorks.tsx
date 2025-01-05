import { PageHead } from "../../components/PageHead";
import { WorksBox } from "./components/works/WorksBox";
import { WorksCard } from "./components/works/WorksCard";
import { ContentsType, Work } from "./types";
/* CSS */
import "./works.css";

export const PageWorks = () => {

  const works: Work[] = [
    {
      title: "MusicWolf",
      tags: ["企画", "React", "Node.js", "Socket.io", "ハッカソン出展作品"],
      description: "「音楽×ワードウルフ」をテーマに繰り広げられる新感覚ボードゲーム！1人だけ違う音楽を聴いているスパイを「音楽を聴いた時の感情」や「音楽に関する情報」をもとに推理で当てよう！（サポータズ主催：2023マンスリーハッカソンvol.9・最優秀賞獲得作品）",
      contents: [
        { 
          contentsType: ContentsType.Image,
          url: "https://portfolioapi.izawasoma.com/files/musicwolf-main.jpg"
        },
        { 
          contentsType: ContentsType.Video,
          url: "https://portfolioapi.izawasoma.com/files/musicwolf-demo.mp4"
        },
        { 
          contentsType: ContentsType.Image,
          url: "https://portfolioapi.izawasoma.com/files/musicwolf-description.jpg"
        }
      ]
    },
    {
      title: "日報管理アプリ",
      tags: ["業務委託", "PHP", "Laravel", "javascript", "bootstrap"],
      description: "その日の業務内容を管理ツールに登録された「案件」「タグ」などから楽々登録。集計画面では、案件ごとの業務工数を集計することができます。実装では設計〜実装〜テストまでを担当しました。（https://github.com/izawasoma-og/syanai_kotei_kanri）",
      contents: [
        { 
          contentsType: ContentsType.Image,
          url: "https://portfolioapi.izawasoma.com/files/nippo1.png"
        },
        { 
          contentsType: ContentsType.Image,
          url: "https://portfolioapi.izawasoma.com/files/nippo2.png"
        }
      ]
    },
    {
      title: "Qさま「助けマス」をWebゲームで再現",
      tags: ["イベント", "PHP", "React"],
      description: "Qさまの人気コーナー「助けマス」をWebアプリで完全再現！学内イベントのクイズ大会でのシステム実装〜イベント進行まで行いました。現在は、WebSocketなどを用いた複数人プレイに向けて誠意製作中。著作権の関係上はしませんが、オンラインイベントを開催しようと思っております。",
      contents: [
        { 
          contentsType: ContentsType.Image,
          url: "https://portfolioapi.izawasoma.com/files/tasuke.png"
        },
        { 
          contentsType: ContentsType.Video,
          url: "https://portfolioapi.izawasoma.com/files/tasuke-event.mp4"
        },
        { 
          contentsType: ContentsType.Video,
          url: "https://portfolioapi.izawasoma.com/files/tasuke-demo.mp4"
        }
      ]
    },
    {
      title: "リアル脱出ゲームフェスティバル パンフレット",
      tags: ["業務委託", "謎制作", "謎デザイン"],
      description: "2024年の8月23日〜8月25日に開催された「世界で一番謎めいたフェス」にて販売されたグッズ「パンフレット」の巻末おまけ謎の制作を担当しました。B5サイズから広がる幕張メッセでのフェスを追体験できる作品となり「おまけ謎とは思えないクオリティ！」などの好評をいただきました。",
      contents: [
        { 
          contentsType: ContentsType.Image,
          url: "https://www.scrapmagazine.com/wp-content/uploads/2024/03/601cd339f5385beee874bec9a2668089-768x403.jpg"
        }
      ]
    },
    {
      title: "Mystery For You 2024年11月「ある司令室からの脱出」",
      tags: ["業務委託", "謎制作"],
      description: "SCRAP様のサブスクリプションサービス「Mystery For You」にて2024年11月発送分の作品を担当しました。Web制作で身につけた技術や過去のイベント制作の経験を活かして制作を行い、「自宅にいながらリアル脱出ゲームを体験できる！」などの好評をいただいた作品です。こちらの商品は「Mystery For You」の2ヶ月継続特典の過去作品購入からご購入いただけます。",
      contents: [
        { 
          contentsType: ContentsType.Image,
          url: "https://mystery-for-you.scrapticket.jp/uploads/krRRM5qFZmrJtHXwUwJ7fBMVGF9ESsr8RMgydAiO.png"
        }
      ]
    },
  ]
  
  return (
    <div className="PageWorks">
      <PageHead _title="Works" _subtitle="制作記録" />
      <WorksBox>
        {
          works.map(work => (
            <WorksCard
              _work={work}
            />
          ))
        }
      </WorksBox>
    </div>
  );
};
