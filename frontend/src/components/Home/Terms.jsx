import React from "react";

const Terms = () => {
  return (
    <div className="container mx-auto p-6 pt-32">
      <h1 className="text-3xl font-bold text-center mb-4">
        MediSure Terms and Conditions
      </h1>
      <p className="text-gray-600 text-center mb-6">
        Last Updated: 18.03.2025
      </p>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">1. Acceptance of Terms</h2>
        <p>
          By accessing or using MediSure, you acknowledge and agree to these
          Terms and Conditions, along with our Privacy Policy. If you do not
          agree, please refrain from using our services.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">2. About MediSure</h2>
        <p>
          MediSure is an AI-powered healthcare assistant designed to provide
          medicine dosage recommendations based on user inputs such as age,
          gender, weight, height, and symptoms. This service is purely
          informational and does not replace professional medical consultation.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">3. User Responsibilities</h2>
        <ul className="list-disc list-inside">
          <li>
            Provide accurate and truthful information for better dosage
            recommendations.
          </li>
          <li>
            Understand that MediSure does not provide medical diagnoses,
            prescriptions, or emergency medical services.
          </li>
          <li>
            Use the platform responsibly and refrain from misusing the service
            for fraudulent or unethical purposes.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">4. Medical Disclaimer</h2>
        <p>
          MediSure is not a substitute for professional healthcare advice.
          Always consult a qualified medical professional before making
          medication or health-related decisions. We disclaim any liability for
          reliance on our recommendations.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          5. Data Collection and Privacy
        </h2>
        <ul className="list-disc list-inside">
          <li>
            MediSure only collects essential health-related data (age, gender,
            weight, height, and symptoms) to generate dosage recommendations.
          </li>
          <li>
            Your data is stored securely and is never shared with third parties
            without your explicit consent.
          </li>
          <li>
            Refer to our Privacy Policy for more details on data handling and
            security measures.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">6. Intellectual Property</h2>
        <p>
          MediSure, including its AI algorithms, software, and branding, is the
          intellectual property of MediSure and is protected under applicable
          copyright and intellectual property laws. Users may not reproduce,
          distribute, or modify any content without prior permission.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          7. Limitation of Liability
        </h2>
        <p>
          MediSure and its developers are not responsible for any inaccuracies,
          side effects, or consequences resulting from reliance on our service.
          The platform is designed to assist but not replace medical
          professionals.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          8. Updates and Modifications
        </h2>
        <p>
          We reserve the right to update, modify, or discontinue any part of
          MediSure, including these Terms and Conditions, at any time. Continued
          use of our service after changes are made implies acceptance of the
          revised terms.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">9. Account Termination</h2>
        <p>
          MediSure may suspend or terminate access if users violate these Terms
          and Conditions or misuse the platform in any way.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">10. Governing Law</h2>
        <p>
          These Terms and Conditions shall be governed by and interpreted under
          the laws of [Insert Jurisdiction].
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">11. Contact Information</h2>
        <p>
          For any inquiries, concerns, or support, please reach out to us at
          [Insert Contact Email].
        </p>
      </section>
    </div>
  );
};

export default Terms;