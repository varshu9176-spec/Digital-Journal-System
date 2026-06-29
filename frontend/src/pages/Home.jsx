import { useState } from "react";
import Navbar from "../components/Navbar";
import JournalForm from "../components/JournalForm";
import JournalList from "../components/JournalList";

function Home() {
  
  // Get username saved during registration
  const username = localStorage.getItem("username") || "User";

  // Motivational quotes
  const quotes = [
    "✨ Every day is a fresh start. Write your story.",
    "🌸 Small memories create beautiful journeys.",
    "💜 Believe in yourself and keep writing.",
    "📖 Every journal entry is a step towards growth.",
    "🌟 Your thoughts deserve to be remembered."
  ];

  // Show a random quote
  const [quote] = useState(
    quotes[Math.floor(Math.random() * quotes.length)]
  );

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f5f3ff",
      }}
    >
      <Navbar />

      <div
        style={{
          width: "80%",
          margin: "30px auto",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            color: "#5b3df5",
            fontSize: "38px",
            marginBottom: "10px",
          }}
        >
          Welcome, {username}! 👋
        </h1>

        <p
          style={{
            color: "#666",
            fontSize: "18px",
            marginBottom: "30px",
          }}
        >
          {quote}
        </p>

        <JournalForm />

        <br />

        <JournalList />
      </div>
    </div>
  );
}

export default Home;
