declare namespace sockjs {

    interface BaseEvent {
        type: string;
    }

    interface OpenEvent extends BaseEvent {
    }

    interface CloseEvent extends BaseEvent {
        code: number;
        reason: string;
        wasClean: boolean;
    }

    interface MessageEvent extends BaseEvent {
        data: string;
    }

    interface SessionGenerator {
        (): string;
    }

    interface Options {
        server?: string;
        sessionId?: number | SessionGenerator;
        transports?: string | string[];
    }

    enum State {
        CONNECTING = 0, OPEN, CLOSING, CLOSED
    }

    interface SockJSClass extends EventTarget {
        readyState: State;
        protocol: string;
        url: string;
        onopen: (e: OpenEvent) => any;
        onclose: (e: CloseEvent) => any;
        onmessage: (e: MessageEvent) => any;
        send(data: any): void;
        close(code?: number, reason?: string): void;
    }
}
declare let SockJS: {
    new(url: string, _reserved?: any, options?: sockjs.Options): sockjs.SockJSClass;
    (url: string, _reserved?: any, options?: sockjs.Options): sockjs.SockJSClass;
    prototype: sockjs.SockJSClass;
    CONNECTING: sockjs.State;
    OPEN: sockjs.State;
    CLOSING: sockjs.State;
    CLOSED: sockjs.State;
};