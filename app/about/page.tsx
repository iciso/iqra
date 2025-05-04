const AboutPage = () => {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold text-center mb-8">About IQRA Islamic Quiz App</h1>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="text-gray-700">
          Our mission is to provide a fun and engaging way for Muslims and anyone interested in Islam to learn and test
          their knowledge of Islamic teachings. We aim to make Islamic education accessible and enjoyable for everyone,
          regardless of their background or level of knowledge.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">About the App</h2>
        <p className="text-gray-700">
          The IQRA Islamic Quiz App offers comprehensive quizzes across twelve Islamic knowledge categories: Quran, Fiqh
          (Islamic Jurisprudence), Tafsir (Quranic Exegesis), Hadeeth (Prophetic Traditions), Aqeedah (Islamic
          Monotheism), Seerah (Prophet's Biography), Tazkiyah (Spiritual Purification), Islamic History, Dawah (Inviting
          to Islam), New Muslims (Essentials for New Muslims), Comparative Religion, and Islamic Finance.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <p className="text-gray-700">
          If you have any questions, suggestions, or feedback, please feel free to contact us at{" "}
          <a href="mailto:support@example.com" className="text-blue-500">
            support@example.com
          </a>
          .
        </p>
      </section>
    </div>
  )
}

export default AboutPage
