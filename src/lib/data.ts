export type Article = {
  title: string;
  description: string;
  tags: string[];
  image: string;
  year: string;
  link?: string;
  github?: string;
};

export const ARTICLES: Article[] = [
  {
    title: "Nillion 101: A Comprehensive Primer",
    description: "",
    tags: ["notes", "crypto"],
    image: "/nillion.png",
    year: "2024",
    link: "https://paragraph.com/@arnavb/nillion-101-a-comprehensive-primer"
  },
  {
    title: "Blockchain Simplified: A Guide for Beginners",
    description: "",
    tags: ["notes", "crypto"],
    image: "/blockchain simplified.png",
    year: "2023",
    link: "https://paragraph.com/@arnavb/blockchain-simplified-a-guide-for-beginners"
  },
  {
    title: "Cryptography Simplified: A Beginner's Guide",
    description: "",
    tags: ["notes", "crypto"],
    image: "/cryptography simplified.png",
    year: "2023",
    link: "https://paragraph.com/@arnavb/cryptography-simplified-a-beginners-guide"
  },
  {
    title: "32 Ideas on Decentralization, Crypto, and its Future by Balaji S.",
    description: "",
    tags: ["notes", "crypto"],
    image: "/balaji crypto.png",
    year: "2023",
    link: "https://paragraph.com/@arnavb/32-ideas-on-decentralization-crypto-and-its-future-by-balaji-s"
  },
  {
    title: "a16z Crypto Startup School",
    description: "Notes from the a16z Crypto Startup School.",
    tags: ["notes", "crypto"],
    image: "/a16z-title.png",
    year: "2023",
    link: "/writings/a16z-css"
  },
  {
    title: "2023",
    description: "",
    tags: ["thoughts"],
    image: "/2023.png",
    year: "2023",
    link: "https://arnavbee.substack.com/p/2023"
  }
];

export const A16Z_ARTICLES: Article[] = [
  {
    title: "Crypto Business Models (Notes from Ali Yahya)",
    description: "",
    tags: ["notes", "crypto"],
    image: "/a16z-ali.png",
    year: "2023",
    link: "https://paragraph.com/@arnavb/crypto-business-models-notes-from-ali-yahyas-lesson"
  },
  {
    title: "Products vs Protocols (Notes from Nitya)",
    description: "",
    tags: ["notes", "crypto"],
    image: "/a16z-nitya.png",
    year: "2023",
    link: "https://paragraph.com/@arnavb/products-vs-protocols-notes-from-nityas-lesson"
  },
  {
    title: "Crypto Networks and Why They Matter (Chris Dixon)",
    description: "",
    tags: ["notes", "crypto"],
    image: "/chris.jpg",
    year: "2023",
    link: "https://paragraph.com/@arnavb/crypto-networks-and-why-they-matter-chris-dixon"
  },
  {
    title: "Building and Scaling a Crypto Company (Brian Armstrong)",
    description: "",
    tags: ["notes", "crypto"],
    image: "/companies.jpg",
    year: "2023",
    link: "https://paragraph.com/@arnavb/building-and-scaling-crypto-company-notes-from-brian-armstrongs-lesson"
  },
  {
    title: "Playbook for Crypto Founders",
    description: "",
    tags: ["notes", "crypto"],
    image: "/playbook.png",
    year: "2023",
    link: "https://paragraph.com/@arnavb/playbook-for-crypto-founders"
  },
  {
    title: "Building Consumer Products Using Hero's Journey (Sriram Krishnan)",
    description: "",
    tags: ["notes", "product"],
    image: "/a16z-sriram.png",
    year: "2023",
    link: "https://paragraph.com/@arnavb/building-consumer-products-using-heros-journey-sriram-krishnan"
  }
];

export type Resource = {
  title: string;
  type: string; // e.g. "(Book)", "(Audio)"
  date: string; // e.g. "06.24"
  link: string;
};

export const RESOURCES: Resource[] = [
  {
    title: "The Master Switch",
    type: "(Book)",
    date: "06.24",
    link: "https://en.wikipedia.org/wiki/The_Master_Switch"
  },
  {
    title: "Detroit Techno '99",
    type: "(Audio)",
    date: "05.24",
    link: "#"
  },
  {
    title: "Fat Protocols",
    type: "(Essay)",
    date: "05.24",
    link: "https://www.usv.com/writing/2016/08/fat-protocols/"
  },
  {
    title: "The Design of Everyday Things",
    type: "(Book)",
    date: "04.24",
    link: "https://en.wikipedia.org/wiki/The_Design_of_Everyday_Things"
  },
  {
    title: "Refactoring UI",
    type: "(Reading)",
    date: "02.24",
    link: "https://www.refactoringui.com/"
  }
];
