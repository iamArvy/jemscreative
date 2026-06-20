export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();

  try {
    const body = await readBody(event);

    const response = await fetch(config.googleScriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const text = await response.text();

    return {
      success: response.ok,
      status: response.status,
      response: text,
    };
  } catch (error) {
    console.error("[WAITLIST] ERROR:", error);

    throw createError({
      statusCode: 500,
      statusMessage: "Waitlist submission failed",
    });
  }
});
