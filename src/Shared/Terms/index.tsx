import { cn } from "@/utils/cn";

const TermsPage = () => {
  const commonClasses = {
    title: "text-white",
    subtitle: "text-[#7F849E] text-sm lg:text-base",
  };

  return (
    <div className="flex flex-col px-4 lg:max-w-[1330px] text-justify mx-auto w-full pb-96 lg:pb-32 lg:px-20 pt-28">
      <h3 className="text-lg lg:text-3xl font-bold text-white mb-3">Terms of Services</h3>
      <p className={commonClasses.subtitle}>Last Updated: January 10th, 2025</p>

      <p className={cn("my-5", commonClasses.subtitle)}>
        Please read the Terms and Conditions carefully in their entirety before
        using the Services. The information in this document provides important
        details about your legal obligations when accessing and using Triad’s
        Services. By proceeding, you acknowledge and agree to comply with the
        Terms outlined herein.
      </p>

      <ol className="lg:list-decimal text-white lg:ml-4">
        {data.map((item, index) => {
          if (item.isExtension) {
            return (
              <div key={index}>
                {item.paragraph.map((text, idx) => (
                  <p
                    key={idx}
                    className={commonClasses.subtitle}
                    style={{ marginBottom: "1em" }}
                  >
                    {text}
                  </p>
                ))}
                {item.subSections && (
                  <ol className="lg:list-upper-alpha text-white ml-6">
                    {item.subSections.map((subItem, subIndex) => (
                      <li key={subIndex} className="text-[#7F849E] mb-4">
                        <span className="text-white">
                          {String.fromCharCode(65 + subIndex)}.{" "}
                        </span>
                        <div className="text-justify inline ml-2">
                          {subItem}
                        </div>
                      </li>
                    ))}
                  </ol>
                )}
              </div>
            );
          }

          return (
            <li key={index} className="mb-5">
              <h4 className="text-white my-2 text-sm lg:text-base font-semibold uppercase">{item.title}</h4>
              {item.paragraph.map((text, idx) => (
                <p
                  key={idx}
                  className={commonClasses.subtitle}
                  style={{ marginBottom: "1em" }}
                >
                  {text}
                </p>
              ))}
              {item.subSections && (
                <ol className="lg:list-upper-alpha text-white ml-6">
                  {item.subSections.map((subItem, subIndex) => (
                    <li key={subIndex} className="text-[#7F849E] mb-4">
                      <span className="text-white">
                        {String.fromCharCode(65 + subIndex)}.{" "}
                      </span>
                      <div className="text-justify inline ml-2">{subItem}</div>
                    </li>
                  ))}
                </ol>
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default TermsPage;

const data = [
  {
    title: "Acceptance of Terms",
    paragraph: [
      `1.1. By accessing or using Triad's Prediction Markets ("Platform"), you expressly acknowledge and agree to fully comply with the Terms of Service outlined in this document. If you do not agree with any part of these Terms, it is your responsibility to immediately cease using the Platform and discontinue any interaction with our services. Continued use of the Platform, after any disagreement, will constitute your acceptance and agreement to all the Terms set forth herein.`,
      `1.2. Triad reserves the right to modify, amend, or update these Terms of Service at any time, in order to improve or adjust the operation of the Platform, as well as to comply with any legal or regulatory changes. Such modifications will be duly published on the Platform and will be effective from the date of publication. Continued use of the Platform after the publication of modifications to the Terms will be interpreted as the user's unconditional acceptance of the new terms. Therefore, it is the user's responsibility to regularly review the Terms to stay informed about any potential changes.`,
    ],
  },
  {
    title: "Eligibility ",
    paragraph: [
      `2.1. You represent, warrant, and assume full responsibility for: being at least 18 years of age or having reached the minimum legal age required in your jurisdiction to enter into binding contracts and engage in financial transactions, including making predictions and conducting operations on the Platform. Furthermore, you agree to comply with all applicable local laws, regulations, and policies in your region. This includes the responsibility to ensure that you are authorized to participate in the Platform’s services and conduct transactions in accordance with the applicable local legislation.`,
      `2.2. You acknowledge that the use of the Platform is strictly prohibited in any jurisdiction where prediction activities or cryptocurrency transactions are considered illegal or prohibited by law. In any case, it is your responsibility to verify whether the use of the Platform is allowed in your region and ensure that you comply with local laws, including accepting and adhering to the legal provisions relevant to your conduct and the activities performed through the Platform.`,
      `2.3. Triad is not responsible for users who, whether deliberately or inadvertently, violate local laws. Any violation of these regulations will be the sole responsibility of the user, who may be subject to penalties or legal consequences as determined by the competent authorities in their jurisdiction. Triad reserves the right to suspend or terminate access to the Platform if it identifies that the user is operating in a region where their activities are illegal.`,
    ],
  },
  {
    title: "Nature of the Service",
    paragraph: [
      `3.1. Triad offers a decentralized platform where users can participate in prediction markets for events, making forecasts on the outcomes of future occurrences, based on a variety of information sources, including public data, sentiment analysis, and other relevant factors. The primary goal of Triad’s prediction markets is to provide an engaging and educational experience, allowing users to enhance their analytical and decision-making skills in events of collective interest.`,
      `3.2. The service provided by Triad is intended for entertainment and educational purposes only, and is not suitable or intended to be used as financial or investment advice. While predictions in the market may be based on widely accessible data and verifiable sources, the nature of these markets involves uncertainty and risk. Triad does not guarantee the accuracy of outcomes or the certainty of success in predictions made, and users should be aware that the market may be influenced by unforeseen variables or sudden changes in the scenario.`,
      `3.3. Triad does not provide, under any circumstances, financial, legal, accounting, or investment advice, whether directly or indirectly, explicitly or implicitly. The Platform is designed to allow users to actively participate in prediction markets, but all decisions related to bets and transactions made on the Platform are the sole and exclusive responsibility of the users.`,
      `3.4. Users are fully responsible for their own assessment of the risks involved in each transaction and should seek independent advice from qualified professionals, if necessary, before making any decisions. Triad will not be liable for any losses or damages that may arise from decisions made based on the information or prediction markets available on the Platform. Participation in Triad's markets should be considered a risky activity, and users must be prepared to accept the financial consequences of their choices.`,
    ],
  },
  {
    title: "Use of the $TRD Token",
    paragraph: [
      `4.1. Use of the Official $TRD Token on the Platform`,
      `The official currency used for all transactions within the Triad Platform is $TRD, a native and exclusive cryptocurrency based on the Solana blockchain. $TRD is designed to be the primary means of payment for all interactions within the Platform, including, but not limited to, predictions, NFT purchases, and other financial transactions related to Triad's markets and contracts.`,
      `Platform users should understand that $TRD is a cryptocurrency and, as such, is subject to all conditions and characteristics associated with digital assets, including but not limited to volatility and market fluctuations. By using $TRD, you acknowledge that you are aware of its characteristics and agree to its use as outlined in this document.`,
      `4.2. Conversion of Deposits in SOL and Other Cryptocurrencies`,
      `Any deposit made on the Platform in SOL or other cryptocurrencies will be automatically converted to $TRD, according to the conversion rate at the time of the transaction. The conversion rate may vary depending on market conditions at the time of conversion and will be calculated fairly and transparently by the Platform. Triad is not responsible for any fluctuation or market value change of $TRD that may occur between the deposit and the conversion to $TRD. The automatic conversion of cryptocurrencies may result in values higher or lower than expected, depending on market conditions, such as the high volatility of cryptocurrencies. The user should be aware that by depositing SOL or other cryptocurrencies, they are subject to the market conversion conditions at that moment. Therefore, any risk related to market fluctuations will be the sole responsibility of the user.`,
      `4.3. Nature of $TRD and Associated Risks`,
      `$TRD is not a fiduciary asset, meaning it does not qualify as legal tender and is not recognized as an official currency by any government or financial entity. The value of $TRD is solely determined by the forces of supply and demand in the cryptocurrency market, and it may experience significant and unforeseen fluctuations. Triad does not provide any guarantee regarding the stability or predictability of the value of $TRD, and the user acknowledges that the value of $TRD is subject to market risks, speculation, and other factors beyond the Platform's control. Like any digital asset, $TRD can be highly volatile and subject to rapid and substantial value changes without notice. The user understands that by using $TRD within the Platform, they assume full responsibility for the risk of value loss, whether due to market fluctuations, changes in economic conditions, or any other relevant factor. Triad will not be liable for any losses associated with changes in the value of $TRD, and transaction decisions are always the sole responsibility of the user.`,
    ],
  },
  {
    title: "Market Resolution",
    paragraph: [
      `5.1. Resolution of Prediction Markets and Guarantee of Fairness.`,
      `Prediction markets on the Triad Platform will be resolved based on official and widely recognized sources, such as announcements from verified organizations, event results, or other publicly accessible evidence. Triad is committed to providing the highest possible accuracy when resolving markets, utilizing reliable and impartial sources. However, Triad cannot guarantee, under any circumstances, that all external information will always be accurate or up-to-date. The accuracy of data and results is subject to external factors beyond Triad’s control, such as variations in data sources and potential human or technical errors. Official results from the sources used to resolve markets will be considered final. Triad is not responsible for any errors or inaccuracies in the information provided by external sources, and in the case of discrepancies between sources, Triad will make decisions based on the most reliable evidence available at the time.`,
      `5.2. Closure of Unresolved Markets`,
      `If, for any reason, a prediction market cannot be resolved due to a lack of reliable information, unforeseen events, or extraordinary circumstances, Triad reserves the right to close the market on the previously established final date, with the refund of the funds wagered to users. This closure will occur regardless of the status of the prediction or the absence of a verifiable outcome. Triad will take all necessary steps to ensure that the decision to close a market is made fairly and that user funds are properly refunded.`,
      `In cases of unforeseen events, such as natural disasters, operational disruptions, or sudden changes in market conditions, Triad commits to carefully reviewing the circumstances before making any decision regarding the closure of a market. The refund of funds will only occur when there is no way to obtain sufficient information or in a manner that respects the principles of fairness and transparency of the platform.`,
      `5.3. Payment Claims and Request Deadlines`,
      `Payments related to closed markets must be requested within 30 days of the market closure. This period is established to ensure that all users have the opportunity to claim their rewards while maintaining the platform's efficiency and security. If payments are not requested within this timeframe, the funds will be automatically returned to the Triad protocol, closing the matter permanently. Once the funds are returned to the protocol, no further claims or refunds will be allowed.`,
      `This procedure has been implemented to ensure the platform operates in an organized manner and that resources are managed responsibly. Users should be aware of this deadline and ensure that any payments owed are requested in a timely manner. Triad may, at its discretion, send notifications about the approaching end of the deadline, but it is the user's responsibility to monitor transactions and claim the funds on time.`,
    ],
  },
  {
    title: "Fees and Costs",
    paragraph: [
      `6.1. The Platform will charge fixed fees on transactions made. These fees are subject to change at any time, as needed.`,
      `6.2. All fees charged are irreversible once the transaction is executed and will not be refunded, regardless of any circumstances that may arise thereafter.`,
    ],
  },
  {
    title: "Prohibitions and Conduct",
    paragraph: [
      `7.1. Illegal Activities and Market Manipulation: Strict Prohibitions`,
      `It is strictly prohibited within the Triad Platform to engage in any action that compromises the integrity and transparency of the markets and services provided. This includes, but is not limited to:`,
    ],
    subSections: [
      "Market Manipulation: Any attempt to manipulate the outcomes of prediction markets, including artificially altering prices, trading volumes, or any other market metrics, with the intent to gain unfair advantages or alter results in an unjust manner.",
      `Misinformation and Deception: The spread of false or misleading information with the purpose of influencing other users' decisions or distorting the market's perception. This includes creating rumors, fake news, or fraudulent statements with the intent to deceive or manipulate the choices of other platform participants.`,
      `Fraudulent Activities: Any use of the Platform for illegal purposes, including but not limited to activities such as money laundering, terrorist financing, tax fraud, or any other criminal activities that may occur within a digital environment.`,
      `Unauthorized Exploitation of the Platform: The attempt to exploit system vulnerabilities or perform reverse engineering on any component of the Platform to gain unauthorized access to data or modify the functionality of the Platform in an unauthorized manner.`,
      `Malicious Automation: The use of bots, automated scripts, or any other type of automation tool to harm the markets, distort transaction outcomes, or affect the experience of other users. The use of such tools can compromise the security and fairness of the Platform, creating a risky environment for all participants.`,
    ],
  },
  {
    title: "",
    paragraph: [
      `7.2. Triad's Rights in Case of Violation and Additional Measures`,
      `A Triad reserves broad rights to ensure that its Platform continues to operate securely and fairly for all its users. These measures include:`,
    ],
    subSections: [
      "Suspension and Termination of Accounts: Triad may suspend or terminate any account that violates the policies and Terms of Service, without prior notice, particularly in cases of market manipulation, fraud, or any other violation that threatens the integrity of the Platform. This may also include the forfeiture of access to the Digital Assets associated with the violating account.",
      `Investigation and Auditing: Triad may conduct internal investigations to verify users' compliance with the Terms of Service. This may include analyzing transactions on the Platform and checking for potential patterns of fraudulent activities or non-compliant behavior. Any evidence of a violation may result in disciplinary actions, such as temporary suspension or permanent account blocking.`,
      `Security and Monitoring: Triad will implement robust security measures, including monitoring technologies and detection systems to prevent and identify suspicious activities. The Platform's security is a priority, and any detected violation may result in immediate sanctions, such as the suspension of involved accounts and freezing of assets until the investigation is completed.`,
    ],
    isExtension: true,
  },
  {
    title: "Security and Accounts",
    paragraph: [
      `8.1. You are solely responsible for maintaining the security of your access credentials to the Platform. This includes, but is not limited to, your private keys and login information.`,
      `8.2. By accessing the Triad services and interacting with the platform, you acknowledge the inherent risks of using cryptographic systems, especially regarding the Solana blockchain. Solana uses public/private key cryptography, and you are solely responsible for securing your private keys. In the event of loss or compromise of your keys, it will not be possible to recover or access your digital assets. Triad does not have access to these keys and, therefore, cannot intervene or protect your assets.`,
      `8.3. Triad does not control or manage the Solana blockchain or the associated smart contracts. The platform operates on a decentralized network, meaning there are no guarantees regarding the security, stability, or availability of the network. Changes to the network protocol or smart contracts may occur and impact the platform's operation. It is the user's responsibility to understand and accept these risks before using the services. Triad does not assume responsibility for any loss or damage related to network security, smart contract failures, or any other technical issues. By using the platform's services, you acknowledge that the responsibility for protecting your digital assets and securely managing your private keys lies solely with you. Losing access to your private key will result in the irreversible loss of access to your assets, with no possibility of recovery.`,
      `8.4. If you notice any suspicious activity on your account, including unauthorized transactions or unknown logins, you must immediately notify Triad's support team for investigation and resolution.`,
      `8.5. By using Triad's services, you acknowledge that the security of digital assets is subject to risks arising from technological advancements and potential vulnerabilities in cryptographic systems. Such developments may impact the integrity of transactions and the protection of assets recorded on the Solana blockchain, leading to possible losses or compromise of access to your funds.`,
      `8.6. Triad is committed to updating its systems to mitigate emerging threats and continuously strengthen its security measures. However, it is important to understand that no system is immune to all technological uncertainties. By using our services, you accept the inherent risks of the digital environment and acknowledge that Triad cannot guarantee absolute protection against events beyond its control.`,
    ],
  },
  {
    title: " Limitation of Liability",
    paragraph: [
      `9.1. Triad does not guarantee that the Platform will always be available or free from errors. In the event of failures, interruptions, or technical errors, Triad will do its best to resolve the situation but cannot be held responsible for any losses resulting from such occurrences.`,
      `9.2. Triad is not responsible for any financial loss, technical failures, or unavailability of the Solana blockchain or any other third-party technological infrastructure that may affect the Platform.`,
      `9.3. Although Triad strives to provide accurate and up-to-date information on its platform and during the use of its services, it is important to note that the available data may not always be entirely correct, comprehensive, or current. Changes may occur without prior notice, including adjustments to policies or features, aimed at continuously improving the user experience.`,
      `9.4. You are responsible for verifying the accuracy of the information before using it as a basis for any decision. Triad does not guarantee the accuracy, completeness, or suitability of any data, including price information displayed on our platform. These values may differ from those found on other similar platforms, potentially being higher or lower. All decisions made `,
      `8.5. By using Triad's services, you acknowledge that the security of digital assets is subject to risks arising from technological advancements and potential vulnerabilities in cryptographic systems. Such developments may impact the integrity of transactions and the protection of assets recorded on the Solana blockchain, leading to possible losses or compromise of access to your funds.`,
      `8.6. Triad is committed to updating its systems to mitigate emerging threats and continuously strengthen its security measures. However, it is important to understand that no system is immune to all technological uncertainties. By using our services, you accept the inherent risks of the digital environment and acknowledge that Triad cannot guarantee absolute protection against events beyond its control.`,
      `based on the information provided by Triad are solely your responsibility, and we recommend caution when using it as a reference for any specific purpose.`,
      `9.5. The use of Triad's services, especially for interacting with Digital Assets and performing related transactions, involves significant financial risks. Digital Assets are highly volatile, experimental, and subject to rapid changes in value. All transactions conducted through Triad are irreversible, final, and non-refundable. By accessing and using our platform, you acknowledge these risks and assume full responsibility for using the services. The risk of loss when trading Digital Assets on Triad can be substantial, and it is essential that you carefully assess whether these operations are appropriate for your financial situation and risk profile. By using the services, you confirm that you have sufficient technical knowledge, market experience, and, if necessary, professional advice to independently evaluate the merits and risks of each transaction.`,
      `9.6. You fully accept the consequences of using the services, including the possibility of permanent loss of access to your Digital Assets. All decisions related to transactions made on Triad are your sole responsibility, and Triad assumes no obligation or liability arising from your use of the platform. Under no circumstances will we be liable for any losses or damages resulting from your decisions or interactions with the services.`,
    ],
  },
  {
    title: "Intellectual Property",
    paragraph: [
      `10.1. All rights related to trademarks, logos, content, designs, source codes, user interfaces, documentation, and any other materials protected by intellectual property, associated with Triad, are exclusively owned by Triad or its licensors. These rights are protected and represent essential assets of the company.`,
      `10.2. It is strictly prohibited to copy, reproduce, distribute, modify, create derivative works, publicly display, reverse engineer, or otherwise use, in whole or in part, any intellectual property of Triad without prior written authorization from the company. This includes, but is not limited to, visual, technical elements, text, images, graphics, videos, features, or any distinctive aspect of the platform.`,
      `10.3. Unauthorized or improper use of any intellectual property of Triad will be taken very seriously. Violations of these provisions may result in sanctions, including legal actions, claims for damages, access restrictions to the platform, and any other measures that Triad deems necessary to protect its rights`,
      `10.4. If misuse of any Triad intellectual property by third parties is identified, users or anyone aware of such a violation are encouraged to report the situation immediately to Triad. The company reserves the right to investigate and take prompt action to mitigate any damage and preserve the integrity of its assets.`,
      `10.5. No clause of these Terms grants the user any license or permission to use Triad's intellectual property, except to the strictly necessary extent to access and use the Services as outlined in these Terms.`,
    ],
  },
  {
    title: "Changes to the Terms",
    paragraph: [
      `11.1. Triad reserves the right to review, modify, update, or supplement these Terms at any time, as deemed necessary to meet operational needs, legal requirements, market changes, or improvements to the user experience. All changes will be posted directly on the Platform, with the update date highlighted for easy reference. Continued use of the Services after the publication of changes will be interpreted as full agreement and acceptance of the revised Terms.`,
      `11.2. In the case of substantial changes that may significantly impact the rights, responsibilities, or obligations of users, Triad will take reasonable steps to ensure that all users are informed. This may include specific notifications within the Platform, sending emails, announcements on Triad’s official social media channels, or any other communication method deemed effective.`,
      `11.3. Users are responsible for periodically reviewing the Terms to stay informed about updates. Triad will not be held responsible for any consequences arising from a lack of awareness of revised Terms, provided these have been duly published and notified as described.`,
      `11.4. If a user does not agree with the updated Terms, they must immediately stop using the Services and, if applicable, close their account on the Platform. Continued use will be considered as irrevocable acceptance of the changes made.`,
      `11.5. Triad emphasizes that the revisions are made to promote greater transparency, security, and the alignment of the Services with the demands of the market and community. User collaboration and feedback are always valued, and improvements and suggestions are welcome through the official communication channels.`,
    ],
  },
  {
    title: "Disputes and Arbitration",
    paragraph: [
      `12.1. Any controversy, conflict, or dispute arising from or related to these Terms, including, but not limited to, matters concerning the use of the Services or the interpretation, breach, or validity of the Terms, will be resolved exclusively through binding arbitration. The arbitration will be conducted confidentially, following impartial and specialized procedures, and the arbitrator's decisions will be binding on both parties and cannot be contested in any other instance.`,
      `12.2. The parties agree and acknowledge that any dispute will be handled individually, expressly waiving any right to participate in or initiate class actions, group arbitrations, or any other dispute resolution mechanism involving multiple claimants. This waiver reflects the mutual commitment to ensure that disputes are resolved directly, promptly, and fairly, reducing the complexity of collective litigation.`,
      `12.3. The arbitration will be conducted in a language accessible to the parties, and the costs related to the arbitration process will initially be shared between the parties, unless the arbitrator decides otherwise. Each party is responsible for its own legal fees and expenses related to the process, unless the arbitrator rules otherwise.`,
      `12.4. The parties agree that the location of the arbitration will be determined in a way that facilitates fairness and neutrality of the process. The arbitration decisions will be considered final and fully enforceable, and may be converted into executive titles as needed.`,
      `12.5. In exceptional situations where arbitration is not legally applicable or enforceable, the parties agree to submit any disputes to the competent courts directly, maintaining confidentiality and mutual respect as fundamental principles.`,
      `12.6. This arbitration agreement does not limit the right of Triad or the user to seek provisional or preventative measures, such as injunctions or protective orders, in any competent court, whenever such actions are necessary to protect legitimate interests or prevent irreparable harm.`,
    ],
  },
  {
    title: "General Provisions",
    paragraph: [
      `13.1. These Terms are based on internationally accepted standards and principles for the operation of decentralized platforms, respecting the applicable standards for blockchain technologies and digital assets. They were created with the goal of ensuring compliance with the best interests of the users, without conflicting with legal or regulatory provisions that may impact their interpretation or enforcement.`,
      `13.2. In the event that any clause, provision, or part of these Terms is declared invalid, illegal, or unenforceable by a competent authority, such decision shall not affect the validity or enforceability of the remaining provisions. The parties agree that the affected provision will be interpreted, whenever possible, in a way that preserves its original intent, and, if necessary, will be replaced by a valid provision that best reflects the intended purpose.`,
      `13.3. Triad is committed to periodically reviewing and adjusting the Terms to ensure their compliance with technological advancements, international regulatory changes, and practices adopted in the decentralized ecosystem, while preserving the integrity and security of interactions between the platform and its users.`,
      `13.4. The enforcement of these Terms will be carried out in a manner that ensures neutrality and fairness between the parties, acknowledging the legal complexities inherent to emerging technologies. No omission or delay in the enforcement of any provision will be interpreted as a waiver of rights or obligations stipulated herein.`,
      `13.5. These Terms reflect Triad's commitment to operate ethically and transparently in the global environment. Any attempt to manipulate, evade, or fraudulently use the provisions contained in these Terms will be considered a serious violation, subjecting the violator to appropriate measures, including restriction of access to the Services and, if applicable, legal actions for damage repair`,
    ],
  },
  {
    title: "Jurisdiction and Service Availability",
    paragraph: [
      `14.1. Triad operates as a decentralized platform based on the Solana blockchain, without the need for a physical headquarters, office, or direct operation in any specific jurisdiction. The platform is globally accessed autonomously, without centralized mediation or control by Triad.`,
      `14.2. Access to the Platform is offered exclusively as an autonomous and decentralized service, and is not intended for residents, citizens, or entities from any specific country or territory.`,
      `14.3. By using the Platform, the user acknowledges and agrees that the responsibility for complying with local laws and applicable regulations is solely theirs. Triad does not monitor or verify the legality of the use of the Platform in any jurisdiction and does not guarantee that Triad's services comply with the laws of any specific country or region.`,
      `14.4. Triad reserves the right to restrict or suspend access to the Platform if it detects significant violations of applicable laws or conduct that undermines the decentralized operation of the protocol.`,
      `14.5. Triad expressly disclaims any intention to direct, promote, or offer its services explicitly or implicitly in any specific territory or country. The service is made available globally in a decentralized manner, without direct marketing or promotion actions by Triad concerning specific locations or users.`,
      `14.6. Triad does not offer, promote, or facilitate access to the Platform in any specific country, territory, or jurisdiction. Access to the Platform is made voluntarily and exclusively by each user, who assumes full responsibility for ensuring that their use complies with applicable local laws and that any legal violations are the sole responsibility of the user.`,
    ],
  },
  {
    title: "Nature of Decentralized Transactions",
    paragraph: [
      `15.1. All transactions carried out on the Platform are executed directly through smart contracts deployed on the Solana blockchain. These smart contracts are autonomous, immutable, and transparent, operating according to the programmed code without any human intervention. `,
      `15.2. Triad does not exercise control over the transaction methods or the smart contracts used on the Platform. This means that any error, technical failure, or incorrect execution of transactions is the responsibility of the blockchain protocol itself or its underlying code, and not Triad.`,
      `15.3. Users acknowledge that by interacting with the Platform, they are directly engaging with smart contracts on the Solana blockchain, and that all transactions are irreversible once confirmed by the network. .`,
      `15.4. Triad is not responsible for any delays, failures, or interruptions in transactions that may occur due to the decentralized nature of the Solana blockchain or network conditions. `,
      `15.5. It is the user's responsibility to ensure they understand the risks associated with interacting with smart contracts, including but not limited to potential security vulnerabilities, transaction costs (gas fees), and fluctuations in digital asset prices. `,
    ],
  },
  {
    title: "Indemnification and Disclaimer of Liability",
    paragraph: [
      `16.1. You agree to defend, indemnify, and hold harmless Triad, its foundation, subsidiaries, affiliates, strategic partners, team members, directors, executives, employees, contractors, agents, representatives, and suppliers (collectively, the "Indemnified Parties") from any and all claims, demands, lawsuits, legal actions, investigations, liabilities, losses, damages, costs, or expenses, including, but not limited to, reasonable attorney's fees and legal costs, arising from or related to:`,
    ],
    subSections: [
      "your use of the Triad platform or any related service, including transactions conducted through it.",
      `digital assets associated with your wallet or any interaction with the platform involving such assets; `,
      `feedback, suggestions, or content provided by you to Triad, if they cause damage or conflicts; `,
      `your violation of any terms, rules, or policies established by Triad;`,
      `your violation of any applicable laws, regulations, or third-party rights, including but not limited to intellectual property rights, privacy rights, or contractual rights;`,
      `and any conduct or omission that results in direct or indirect damages to Triad or the Indemnified Parties.`
    ],

  },
  {
    title: "",
    paragraph: [
      `16.2. If you are required to indemnify an Indemnified Party, Triad or the Indemnified Party shall have the exclusive right to manage and control the defense of such claim, demand, or proceeding, including the selection of attorneys, legal strategies, and the decision to settle or reject settlements. You agree to fully cooperate with the Triad or the Indemnified Parties, providing all necessary information, documents, and support for the defense.`,
      `16.3. Additional Disclaimer of Liability. You acknowledge that any financial or material loss resulting from your conduct or improper use of the platform will be solely your responsibility, and you release Triad from any resulting damages. `
    ],
    isExtension: true,
  },
  
  {
    title: "Contact ",
    paragraph: [
      `17.1. For questions, complaints, or requests, users can contact Triad through the official communication channels. We are committed to providing the best possible support with quick and effective responses to meet all needs. Our goal is to ensure a smooth and hassle-free experience for our users.`,
      `Contact us through the official email: hello@triadfi.co. Our team is available to clarify any issues related to the platform, resolve technical problems, or provide additional information.`
    ],
  },
];
