import { useEffect } from "react";

export default function N8nChatbot() {
  useEffect(() => {
    const loadChat = async () => {
      const module = await import(
        // @ts-expect-error - remote module doesn't have types
        "https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js"
      );
      module.createChat({
        webhookUrl:
          "https://spreston.app.n8n.cloud/webhook/21b8ccdd-6beb-4f8f-acf2-0931cf2b0f11/chat",
        container: document.getElementById("n8n-chat"),
      });
    };

    loadChat();
  }, []);

  return (
    <div
      id='n8n-chat'
      className='fixed bottom-6 right-6 z-50'
    />
  );
}
