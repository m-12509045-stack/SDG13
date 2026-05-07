export default function SDG13App() {
  const tips = [
    {
      title: "Save Energy",
      text: "Turn off lights and unplug chargers when not in use.",
      icon: "💡",
    },
    {
      title: "Use Public Transport",
      text: "Reduce carbon emissions by walking, cycling, or taking public transport.",
      icon: "🚌",
    },
    {
      title: "Recycle",
      text: "Separate waste properly and recycle plastics, paper, and metal.",
      icon: "♻️",
    },
    {
      title: "Plant Trees",
      text: "Trees absorb carbon dioxide and help cool the planet.",
      icon: "🌳",
    },
  ];

  const facts = [
    "Global temperatures are rising because of greenhouse gases.",
    "Sea levels are increasing due to melting ice caps.",
    "Renewable energy helps reduce climate change.",
  ];

  return (
    <div className="min-h-screen bg-green-50 text-gray-800 p-6 font-sans">
      <div className="max-w-5xl mx-auto">
        <div className="bg-green-600 text-white rounded-3xl p-8 shadow-xl mb-8">
          <h1 className="text-5xl font-bold mb-4">SDG 13: Climate Action</h1>
          <p className="text-lg leading-relaxed">
            Learn about climate change, discover ways to help the planet,
            and track your eco-friendly habits.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-3xl shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4">🌍 About SDG 13</h2>
            <p className="leading-relaxed">
              Sustainable Development Goal 13 focuses on taking urgent action
              to combat climate change and its impacts. Countries and citizens
              around the world are encouraged to reduce pollution, protect
              nature, and support sustainable solutions.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4">📊 Climate Facts</h2>
            <ul className="space-y-3">
              {facts.map((fact, index) => (
                <li
                  key={index}
                  className="bg-green-100 rounded-xl p-3 text-sm"
                >
                  {fact}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-6">✅ Daily Climate Tips</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {tips.map((tip, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-lg p-5 hover:scale-105 transition"
              >
                <div className="text-5xl mb-4">{tip.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{tip.title}</h3>
                <p className="text-sm leading-relaxed">{tip.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">🌱 Eco Challenge</h2>
          <p className="mb-4">
            Challenge yourself to complete one eco-friendly action every day.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button className="bg-green-500 hover:bg-green-600 text-white rounded-2xl py-3 font-semibold transition">
              Walk to School
            </button>
            <button className="bg-green-500 hover:bg-green-600 text-white rounded-2xl py-3 font-semibold transition">
              Recycle Today
            </button>
            <button className="bg-green-500 hover:bg-green-600 text-white rounded-2xl py-3 font-semibold transition">
              Save Water
            </button>
            <button className="bg-green-500 hover:bg-green-600 text-white rounded-2xl py-3 font-semibold transition">
              Plant a Tree
            </button>
          </div>
        </div>

        <div className="text-center py-6 text-sm text-gray-600">
          Built to spread awareness about SDG 13 – Climate Action 🌎
        </div>
      </div>
    </div>
  );
}
