import { create } from "zustand";

const useConversation = create((set) => ({
	selectedConversation: null,
	setSelectedConversation: (selectedConversation) => set({ selectedConversation }),
	Messages: [],
	setMessages: (messages) => set({ Messages : messages }),
}));

export default useConversation;

// import { create } from 'zustand';

// const useConversation = create((set) => ({
//   selectedConversation: null,
//   setSelectedConversation: (conversation) => set({ selectedConversation: conversation }),
//   messages: [],
//   setMessages: (messages) => set({ messages: Array.isArray(messages) ? messages : [] }),
// }));

// export default useConversation;
