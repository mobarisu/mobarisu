import React, { useState } from 'react';
import './faq.css';
import {FoodHeader,FoodFooter} from './header_footer';

const Faq: React.FC = () => {
    const [activeIndexes, setActiveIndexes] = useState<number[]>([]);

    const handleH2Click = (index: number) => {
        const currentIndexes = [...activeIndexes];
        const indexPosition = currentIndexes.indexOf(index);
        
        if (indexPosition !== -1) {
            // クリックされたインデックスが既にアクティブな場合、削除する
            currentIndexes.splice(indexPosition, 1);
        } else {
            // クリックされたインデックスが非アクティブな場合、追加する
            currentIndexes.push(index);
        }

        setActiveIndexes(currentIndexes);
    };

    return (
        <>
        <FoodHeader />
            <h1 className="faq_h1">よくある質問</h1>
            <div className="faq">
                <div className="faq_nav">
                    <h2
                        className={`faq_h2 ${activeIndexes.includes(0) ? 'active' : ''}`}
                        onClick={() => handleH2Click(0)}
                    >
                        注文について
                    </h2>
                    {activeIndexes.includes(0) && (
                        <p className="faq_p active">
                            ・注文のキャンセルについて
                            <br />
                            <br />
                            当店では注文確定後のお客様都合によるキャンセル・返品返金は承ることができかねます。なお、お届けした商品が注文内容と明らかに異なる場合には、利用規約の規定にしたがって対応いたします。
                        </p>
                    )}
                </div>
                <div className="faq_nav">
                    <h2
                        className={`faq_h2 ${activeIndexes.includes(1) ? 'active' : ''}`}
                        onClick={() => handleH2Click(1)}
                    >
                        商品について
                    </h2>
                    {activeIndexes.includes(1) && (
                        <p className="faq_p active">
                            ・商品のサイズ変更について
                            <br />
                            <br />
                            到着した商品のサイズが合わない場合につきましては、交換品をご用意できる場合に限りサイズ交換対応が可能でございます。
                        </p>
                    )}
                </div>
            </div>
            <FoodFooter />
        </>
    );
};

export default Faq;
