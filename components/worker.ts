// worker.ts
addEventListener("message", (e) => {
  // Receive data from the main thread
  const { currentPage, itemsPerPage, projectData } = e.data;

  // Calculate the start and end indices for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = currentPage * itemsPerPage;

  // Get the paginated data
  const paginatedData = projectData.slice(startIndex, endIndex);

  // Send the paginated data back to the main thread
  postMessage(paginatedData);
});
