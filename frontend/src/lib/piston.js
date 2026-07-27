// Local Backend Code Execution API

const EXECUTE_API = "http://localhost:3000/api/execute";

const LANGUAGE_VERSIONS = {
  javascript: { language: "javascript" },
  python: { language: "python" },
  java: { language: "java" },
};

/**
 * Execute code using local backend
 *
 * @param {string} language
 * @param {string} code
 * @returns {Promise<{success:boolean, output?:string, error?:string}>}
 */
export async function executeCode(language, code) {
  try {
    const languageConfig = LANGUAGE_VERSIONS[language];

    if (!languageConfig) {
      return {
        success: false,
        error: `Unsupported language: ${language}`,
      };
    }

    const response = await fetch(EXECUTE_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        language: languageConfig.language,
        code,
      }),
    });

    if (!response.ok) {
      return {
        success: false,
        error: `HTTP Error ${response.status}`,
      };
    }

    const data = await response.json();

    if (!data.success) {
      return {
        success: false,
        error: data.error || "Execution Failed",
      };
    }

    return {
      success: true,
      output: data.output || "No Output",
    };
  } catch (error) {
    return {
      success: false,
      error: error.message,
    };
  }
}