import Head from 'next/head';
import Footer from 'src/components/organisms/question/footer';
import Header from 'src/components/organisms/question/header';

export default function Terms() {
  return (
    <>
      <Head>
        <title>
          yametara | 退職後の手続きシミュレーター | 今回の退職について
        </title>
      </Head>

      <main className='flex flex-col min-h-screen'>
        <Header>利用規約</Header>
        <div className='flex-grow text-sm'>
          <div>
            <h2 className='text-xl font-extrabold'>前提条件</h2>
            <ol className='list-decimal text-left list-inside'>
              <li>
                yametara（以下「本サービス」といいます。）は以下の方を対象としております。
                <ul className='list-disc list-inside'>
                  <li>
                    事業所と常用的使用関係にある20歳～65歳未満の社会保険（健康保険/厚生年金保険/雇用保険）の被保険者
                  </li>
                </ul>
              </li>

              <li>
                本サービスはご利用毎に情報をご入力いただく必要があります点、予めご了承ください。
              </li>
            </ol>
          </div>

          <div>
            <h2 className='text-xl font-extrabold'>第1条（適用）</h2>
            <ol className='list-decimal text-left list-inside'>
              <li>
                本規約は、ユーザーと本サービスの利用に関わる一切の関係に適用されるものとします。
              </li>
              <li>
                本サービスに関し、本規約のほか、ご利用にあたってのルール等、各種の定め（以下、「個別規定」といいます。）をすることがあります。これら個別規定はその名称のいかんに関わらず、本規約の一部を構成するものとします。
              </li>
              <li>
                本規約の規定が前条の個別規定の規定と矛盾する場合には、個別規定において特段の定めなき限り、個別規定の規定が優先されるものとします。
              </li>
            </ol>
          </div>
          <div>
            <h2 className='text-xl font-extrabold'>第2条（禁止事項）</h2>
            <p>
              ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません。
            </p>
            <ol className='list-decimal text-left list-inside'>
              <li>法令または公序良俗に違反する行為</li>
              <li>犯罪行為に関連する行為</li>
              <li>本サービスの運営を妨害するおそれのある行為</li>
              <li>他のユーザーに関する個人情報等を収集または蓄積する行為</li>
              <li>不正アクセスをし、またはこれを試みる行為</li>
              <li>
                本サービスに関連して、反社会的勢力に対して直接または間接に利益を供与する行為
              </li>

              <li>
                本サービスの他のユーザーまたは第三者の知的財産権、肖像権、プライバシー、名誉その他の権利または利益を侵害する行為
              </li>
              <li>その他、本サービスが不適切と判断する行為</li>
            </ol>
          </div>
          <div>
            <h2 className='text-xl font-extrabold'>第3条（著作権）</h2>
            <ol className='list-decimal text-left list-inside'>
              <li>
                本サービスの画面および表示する情報に関する著作権を含む一切の権利は、@pachikuriiiに帰属します。
              </li>
              <li>
                本サービスは、ご自身のためにのみご利用いただくものとし、第三者への提供は禁止します。また、本コンテンツの内容について、複製、蓄積、編集加工、二次加工を禁止します。
              </li>
            </ol>
          </div>
          <div>
            <h2 className='text-xl font-extrabold'>
              第4条（保証の否認および免責事項）
            </h2>
            <ol className='list-decimal text-left list-inside'>
              <li>
                本サービスのシミュレーション結果は、各種公的データを元に独自の基準で試算しております。実際値と異なる場合があり、その完全性・正確性を保証するものではございません。
              </li>
              <li>
                本サービスは、退職後の社会保険/税金に関する手続き内容のシミュレート機能であり、シュミレーション結果をもって手続き内容を約束するものではありません。
                あくまでも目安としてご利用ください。
              </li>
              <li>
                本サービスは、情報提供を目的として作成したものであり、特定のサービス等の勧誘を目的とするものではございません。
              </li>
              <li>
                本サービスは、本サービスに事実上または法律上の瑕疵（安全性、信頼性、正確性、完全性、有効性、特定の目的への適合性、セキュリティなどに関する欠陥、エラーやバグ、権利侵害などを含みます。）がないことを明示的にも黙示的にも保証しておりません。
              </li>
              <li>
                本サービスは、本サービスに起因してユーザーおよび第三者に生じたあらゆる損害について一切の責任を負いません。ただし、本サービスに故意または重過失がある場合、本サービスは直接かつ通常の損害を賠償するものとします。
              </li>
              <li>
                本サービスは、本サービスに関して、ユーザーと他のユーザーまたは第三者との間において生じた取引、連絡または紛争等について一切責任を負いません。
              </li>
            </ol>
          </div>
          <div>
            <h2 className='text-xl font-extrabold'>
              第5条（サービス内容の変更等）
            </h2>
            <ol className='list-decimal text-left list-inside'>
              <li>
                本サービスは、ユーザーに通知することなく、本サービスの内容を変更しまたは本サービスの提供を中止することができるものとし、これによってユーザーに生じた損害について一切の責任を負いません。
              </li>
            </ol>
          </div>

          <div>
            <h2 className='text-xl font-extrabold'>
              第6条（本サービスの提供の停止等）
            </h2>
            <ol className='list-decimal text-left list-inside'>
              <li>
                本サービスは、以下のいずれかの事由があると判断した場合、ユーザーに事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします。
                <ul className='list-disc list-inside'>
                  <li>
                    本サービスにかかるコンピュータシステムの保守点検または更新を行う場合
                  </li>
                  <li>
                    地震、落雷、火災、停電または天災などの不可抗力により、本サービスの提供が困難となった場合
                  </li>
                  <li> コンピュータまたは通信回線等が事故により停止した場合</li>
                  <li>
                    その他、本サービスが本サービスの提供が困難と判断した場合
                  </li>
                </ul>
              </li>
              <li>
                本サービスは、本サービスの提供の停止または中断により、ユーザーまたは第三者が被ったいかなる不利益または損害についても、一切の責任を負わないものとします。
              </li>
            </ol>
          </div>

          <div>
            <h2 className='text-xl font-extrabold'>第7条（利用規約の変更）</h2>
            <ol className='list-decimal text-left list-inside'>
              <li>
                本サービスは、必要と判断した場合には、ユーザーに通知することなくいつでも本規約を変更することができるものとします。なお、本規約の変更後、本サービスの利用を開始した場合には、当該ユーザーは変更後の規約に同意したものとみなします。
              </li>
            </ol>
          </div>

          <div>
            <h2 className='text-xl font-extrabold'>
              第8条（準拠法・裁判管轄）
            </h2>
            <ol className='list-decimal text-left list-inside'>
              <li>本規約の解釈にあたっては、日本法を準拠法とします。</li>
              <li>
                本サービスに関して紛争が生じた場合には、神戸地方裁判所を専属的管轄裁判所とします。
              </li>
            </ol>
          </div>
          <p>2023年 3月9日 制定</p>
        </div>

        <Footer></Footer>
      </main>
    </>
  );
}
