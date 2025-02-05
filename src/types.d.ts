export type AlphabetObject = { letter: string; status: number }[];

export type ApiResponse = { result: []; letters: AlphabetObject };

export type inputStyles = "initial" | "correct" | "maybe" | "incorrect";
