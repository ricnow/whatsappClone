export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type MainTabParamList = {
  Camera: undefined;
  conversas: undefined;
  status: undefined;
  chamadas: undefined;
};

export type TabOneParamList = {
  ChatScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

export type User = {
  id: string;
  name: string;
  imageUri: string;
}

export type Message = {
  id: String;
  content: String;
  createdAt: String;
  user: User;
}

export type ChatRoom = {
  id: String;
  users: User[];
  lastMessage: Message;

}