import { MessageService } from "./message.service";

describe("Message Service", () => {
  let service: MessageService;

  beforeEach(() => {
    service = new MessageService();
  });

  it("should have no messages to start", () => {
    expect(service.messages.length).toBe(0);
  });
  it("should add a message when its called", () => {
    service.add("message1");

    expect(services.message.length).toBe(1);
  });
  it("should remove all messages when clear is called", () => {
    service.add("message1");
    service.clear();
    expect(services.message.length).toBe(1);
  });
});
