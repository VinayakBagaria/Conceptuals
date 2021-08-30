interface ChatRoomMediator {
  showMessage(user: User, message: string): void;
}

export class ChatRoom implements ChatRoomMediator {
  private generateDate(): string {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = today.getFullYear();
    return mm + '/' + dd + '/' + yyyy;
  }

  public showMessage(user: User, message: string): void {
    console.log(
      `Message sent by [${user.getName()}] at [${this.generateDate()}] -> \n ${message}`
    );
  }
}

export class User {
  #name: string;
  #chatRoomMediator: ChatRoomMediator;

  constructor(name: string, chatRoomMediator: ChatRoomMediator) {
    this.#name = name;
    this.#chatRoomMediator = chatRoomMediator;
  }

  public getName(): string {
    return this.#name;
  }

  public send(message: string) {
    this.#chatRoomMediator.showMessage(this, message);
  }
}
