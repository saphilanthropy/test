import HomePage from "../../components/HomePage";
import { getContent } from "../../lib/content";

const content = getContent("es");

export const metadata = {
  title: content.meta.title,
  description: content.meta.description,
};

export default function HomeEs() {
  return <HomePage content={content} locale="es" />;
}
