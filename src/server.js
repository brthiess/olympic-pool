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
      server.create("user", {
        teamName: "Garden of Edin",
        realName: "",
        picks: [1, 4, 7, 15, 16, 18],
        img: "rock.png",
        id: 1,
      });
      server.create("user", {
        teamName: "Olympic Rings",
        realName: "",
        picks: [1, 3, 7, 11, 13, 18],
        img: "rock.png",
        id: 334,
      });
      server.create("user", {
        teamName: "Medal Heads",
        realName: "",
        picks: [1, 2, 5, 11, 12, 13],
        img: "rock.png",
        id: 444,
      });
      server.create("user", {
        teamName: "de cruzin’",
        realName: "",
        picks: [20, 16, 15, 8, 7, 3],
        img: "rock.png",
        id: 15,
      });
      server.create("user", {
        teamName: "Holy Sheet",
        realName: "",
        picks: [18, 12, 11, 3, 2, 1],
        img: "rock.png",
        id: 63,
      });
      server.create("user", {
        teamName: "( ͡° ͜ʖ ͡°)",
        realName: "",
        picks: [20, 18, 16, 8, 7, 2],
        img: "rock.png",
        id: 47,
      });
      server.create("user", {
        teamName: "Light & Inside",
        realName: "",
        picks: [4, 1, 2, 16, 18, 20],
        img: "rock.png",
        id: 8,
      });
      server.create("user", {
        teamName: "Everyday I'm Hasselborgin'",
        realName: "",
        picks: [1, 2, 3, 12, 13, 18],
        img: "rock.png",
        id: 39,
      });
      server.create("user", {
        teamName: "TBD",
        realName: "",
        picks: [1, 2, 3, 11, 12, 16],
        img: "rock.png",
        id: 510,
      });
      server.create("user", {
        teamName: "Stealers",
        realName: "",
        picks: [1, 2, 5, 12, 13, 14],
        img: "rock.png",
        id: 611,
      });
      server.create("user", {
        teamName: "Back to Back",
        realName: "",
        picks: [1, 2, 6, 11, 12, 14],
        img: "rock.png",
        id: 712,
      });
      server.create("user", {
        teamName: "Get Your Sheet Together",
        realName: "",
        picks: [1, 4, 7, 12, 16, 18],
        img: "rock.png",
        id: 913,
      });
      server.create("user", {
        teamName: "Manitoba Tuckers",
        realName: "",
        picks: [1, 4, 5, 11, 14, 17],
        img: "rock.png",
        id: 194,
      });
      server.create("user", {
        teamName: "Silent Takeout",
        realName: "",
        picks: [1, 2, 8, 12, 15, 18],
        img: "rock.png",
        id: 155,
      });
      server.create("user", {
        teamName: "Make the Final",
        realName: "",
        picks: [1, 2, 8, 11, 13, 15],
        img: "rock.png",
        id: 216,
      });
      server.create("user", {
        teamName: "TinyTwo",
        realName: "",
        picks: [2, 4, 5, 12, 13, 16],
        img: "rock.png",
        id: 137,
      });
      server.create("user", {
        teamName: "The Canadian Kickers",
        realName: "",
        picks: [1, 2, 7, 12, 13, 18],
        img: "rock.png",
        id: 185,
      });
      server.create("user", {
        teamName: "The Outsliders",
        realName: "",
        picks: [1, 2, 4, 11, 13, 12],
        img: "rock.png",
        id: 191,
      });
      server.create("user", {
        teamName: "Picked Places I want to Visit",
        realName: "",
        picks: [1, 2, 4, 11, 13, 19],
        img: "rock.png",
        id: 200,
      });
      server.create("user", {
        teamName: "Sweeping Beauties",
        realName: "",
        picks: [1, 2, 4, 12, 11, 15],
        img: "rock.png",
        id: 221,
      });
      server.create("user", {
        teamName: "Buchanan Baba",
        realName: "",
        picks: [1, 2, 4, 12, 11, 13],
        img: "rock.png",
        id: 122,
      });
      server.create("user", {
        teamName: "Matt's Mistakes",
        realName: "",
        picks: [1, 2, 4, 11, 12, 15],
        img: "rock.png",
        id: 923,
      });
    },

    routes() {
      this.namespace = "api";
      this.timing = 2000;
      this.get("/users", (schema) => {
        return schema.users.all();
      });
      this.get("/current-user", () => {
        let secureId = getCookie("secureId");
        if (secureId == "madeMyPicks") {
          return {
            username: "madeMyPicks",
            email: "example@example.com",
            teamName: "Made My Picks",
            picks: [1, 3, 4, 11, 12, 13],
          };
        }
        if (secureId == "noPicks") {
          return {
            signedIn: true,
            username: "noPicks",
            email: "example2@example.com",
            teamName: "No picks",
            picks: [],
          };
        }
        return {
          signedIn: false,
        };
      });
    },
  });

  return server;
}

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
}
