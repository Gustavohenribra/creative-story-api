declare global {
    namespace NodeJS {
      interface ProcessEnv {
        NODE_ENV: 'dev' | 'prod';
  
        PORT: string;
        
        OPENAI_API_KEY: string;
    }
  }
  }
  
  export { };