// src/server.js
import { createServer, Model } from "miragejs";

export function makeServer() {
  let server = createServer({
    models: {
      user: Model,
    },

    seeds(server) {
      server.create("user", {
        teamName: "Garden of Edin",
        realName: "",
        picks: [1, 4, 7, 15, 16, 18],
        img: "rock.png",
        id: 1,
      });
      server.create("user", {
        teamName: "Garde234n of Edin",
        realName: "",
        picks: [1, 4, 3, 15, 16, 18],
        img: "rock.png",
        id: 2,
      });
      server.create("user", {
        teamName: "Rock 'Em",
        realName: "",
        picks: [15, 13, 11, 5, 3, 1],
        img: "rock.png",
        id: 24,
      });
    },

    routes() {
      this.namespace = "api";
      this.timing = 2000;
      this.get("/users", (schema) => {
        return schema.users.all();
      });
    },
  });

  return server;
}
