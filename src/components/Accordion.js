/* eslint-disable react/no-unescaped-entities */
import React from "react";

export const Accordion = () => {
  return (
    <div>
      <section className=" ">
        <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
          <h2 className="text-2xl font-semibold sm:text-4xl text-yellow-700">
            Explore the Teachings
          </h2>
          <p className="mt-4 mb-8 ">
          Let the Bhagavad Gita be your guiding light on the path to self-discovery, inner peace, and spiritual realization.
          </p>
          <div className="space-y-4">
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600 text-yellow-600">
                What is the Bhagavad Gita?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 ">
                The Bhagavad Gita, often referred to as the Gita, is a sacred
                Hindu scripture that is part of the epic Mahabharata. It
                consists of a conversation between Prince Arjuna and Lord
                Krishna, who serves as his charioteer and spiritual guide.{" "}
              </p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600 text-yellow-600">
              How can I apply the teachings of the Bhagavad Gita in my daily life?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4">
              The Bhagavad Gita provides valuable insights into ethical living, self-discipline, mindfulness, and devotion. By studying and reflecting on its teachings, one can cultivate virtues such as compassion, humility, and resilience, and strive to lead a life of purpose and integrity.{" "}
              </p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600 text-yellow-600">
                What are some famous verses from the Bhagavad Gita?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 ">
              Some of the most well-known verses from the Bhagavad Gita include "Yogastha kuru karmani" (Chapter 2, Verse 48), "Karmanye vadhikaraste" (Chapter 2, Verse 47), and "Man mana bhava mad bhakto" (Chapter 18, Verse 65). Each of these verses carries profound spiritual significance and offers guidance on righteous action, devotion, and surrender to the divine.{" "}
              </p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600 text-yellow-600">
              What is the significance of the teachings of the Bhagavad Gita?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 ">
              The Bhagavad Gita offers timeless wisdom and guidance on how to live a righteous and fulfilling life. Its teachings are relevant to people of all backgrounds and beliefs, offering practical advice on how to overcome challenges, find inner peace, and attain spiritual realization.{" "}              </p>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
};
