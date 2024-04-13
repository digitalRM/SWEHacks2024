import Image from "next/image";
import WordPlayer from "./WordPlayer";
import Paragraph from "./Paragraph";

export default function Home() {
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <WordPlayer word="snake"/>
      <Paragraph text="Once upon a time, there was a remarkable giraffe named Ginger. Ginger resided in Kenya, a vibrant country in Africa. Like every giraffe, Ginger boasted a long neck and towering legs. Her great height allowed her to easily browse for food from the uppermost branches of the trees in the sprawling savannah. This savannah in Africa is a vast region adorned with abundant grass and scattered trees. It is often referred to as the grasslands. Other creatures, like zebras and antelopes, were unable to reach the lofty heights where Ginger could. However, Ginger consistently discovered her nourishment. She relished the fresh leaves and the tender buds of the trees, thriving in her elevated paradise."/>
    </main>
  );
}
