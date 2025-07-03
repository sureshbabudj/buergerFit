import { Header } from "@/components/Header";
import { Github } from "lucide-react";

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-dvh bg-gradient-to-br from-[#d6ebe9] to-green-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-12">
          <Header reset={() => {}} />
        </div>

        {/* Hero Section */}
        <div className="max-w-2xl text-center mb-12 mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            ⚠️ Disclaimer
          </h2>
          <div className="text-left">
            <p className="text-base lg:text-md mb-2">
              DISCLAIMER: BürgerFit is an independent study application designed
              to help prepare for the German Naturalisation Test
              (Einbürgerungstest). This app is NOT affiliated with, endorsed by,
              or representative of the Federal Office for Migration and Refugees
              (
              <a
                href="https://www.bamf.de/SharedDocs/Anlagen/DE/Integration/Einbuergerung/gesamtfragenkatalog-lebenindeutschland.html"
                target="_blank"
                className="text-blue-600 hover:underline dark:text-blue-400 dark:hover:text-blue-300"
              >
                BAMF*
              </a>
              ) or any other German government entity. All quiz content is based
              on publicly available official materials from BAMF.
            </p>
            <p className="text-base lg:text-md">
              The content for the quizzes in this app is directly derived from
              the official 'gesamtfragenkatalog-lebenindeutschland' (complete
              catalog of questions for the 'Life in Germany' test) provided by
              the Federal Office for Migration and Refugees (BAMF). You can find
              the original source document publicly available at the official
              <a
                href="https://www.bamf.de/SharedDocs/Anlagen/DE/Integration/Einbuergerung/gesamtfragenkatalog-lebenindeutschland.html"
                target="_blank"
                className="text-blue-600 hover:underline dark:text-blue-400 dark:hover:text-blue-300"
              >
                {" "}
                BAMF website*{" "}
              </a>
            </p>
            <p className="text-sm text-gray-500 mt-2">
              <i className="text-sm text-gray-500">
                *Please note: This link leads to an external official government
                website.
              </i>
            </p>
          </div>
        </div>

        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Privacy Policy
          </h2>

          <div className="max-w-2xl mx-auto p-4 text-left">
            <p className="text-md lg:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              <strong>BürgerFit</strong> is a free educational app designed to
              help users prepare for the German Einbürgerungstest
              (naturalization test). We are committed to protecting your privacy
              and ensuring that your personal information is handled
              responsibly.
            </p>

            <h2 className="text-xl font-semibold mt-4 mb-2">
              1. No Personal Data Collection
            </h2>
            <p className="mb-2">
              This app does not collect, store, or share any personal
              information. All quiz progress and settings are stored locally on
              your device and are not transmitted to any server.
            </p>
            <h2 className="text-xl font-semibold mt-4 mb-2">
              2. No Third-Party Ads or Analytics
            </h2>
            <p className="mb-2">
              BürgerFit does not display advertisements or use third-party
              analytics services. Your usage data remains private and is not
              used for marketing or tracking purposes.
            </p>
            <h2 className="text-xl font-semibold mt-4 mb-2">
              3. Open Source & Transparency
            </h2>
            <p className="mb-2">
              The app is open source. You can review the code to verify how your
              data is handled. The source code is available on{" "}
              <a
                href="https://github.com/sureshbabudj/buergerFit"
                target="_blank"
                className="text-blue-600 hover:underline"
              >
                <Github className="w-4 h-4 inline-block" />
                GitHub Repo
              </a>
            </p>
            <h2 className="text-xl font-semibold mt-4 mb-2">4. Contact</h2>
            <p className="mb-2">
              If you have any questions about this privacy policy, please
              contact the app maintainer via the project repository.
            </p>
            <p className="mt-6 text-sm text-gray-500">
              Last updated: July 2, 2025
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
