import { ShieldCheck, ScrollText } from "lucide-react";
import { Link } from "react-router-dom";

export default function TermsAndPrivacy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 page-transition">
      <div className="max-w-3xl w-full bg-white rounded-2xl shadow-md p-8 overflow-y-auto max-h-[90vh]">
        <div className="text-center mb-8">
          <div className="flex justify-center items-center gap-3">
            <ShieldCheck className="h-10 w-10 text-blue-600" />
            <span className="text-2xl font-bold font-display text-gray-800">
              MediSure Policies
            </span>
          </div>
          <p className="mt-2 text-gray-600">Please review our Terms & Privacy Policy</p>
        </div>

        {/* Terms of Service */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
            <ScrollText className="h-5 w-5 text-blue-500" />
            Terms of Service
          </h2>
          <p className="mt-2 text-sm text-gray-700 leading-relaxed">
            By creating an account on MediSure, you agree to use our services for personal healthcare assistance only. You must provide accurate and truthful information. Any misuse of the application or false data entry may lead to account suspension.
            <br /><br />
            MediSure reserves the right to update or modify these terms at any time without prior notice. Continued use of our services implies acceptance of any revisions.
          </p>
        </section>

        {/* Privacy Policy */}
        <section>
          <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-blue-500" />
            Privacy Policy
          </h2>
          <p className="mt-2 text-sm text-gray-700 leading-relaxed">
            Your privacy is important to us. MediSure collects personal information like name, age, gender, and health data only to provide accurate health assistance. We do not sell or share your data with third parties.
            <br /><br />
            All information is stored securely, and you have the right to request data deletion at any time. For any questions regarding data use, please contact our support team.
          </p>
        </section>

        {/* Back to Sign Up */}
        <div className="mt-10 text-center">
          <Link
            to="/register"
            className="inline-block text-blue-600 hover:text-blue-500 text-sm font-medium"
          >
            ← Back to Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}
