import MakeNote from "../components/MakeNote";
import NotesList from "../components/NotesList";
import Modal from "../components/Modal";
import FilterChip from "../components/FilterChip";

function Home({
  noteText,
  setNoteText,
  tagsInput,
  setTagsInput,
  createNote,
  selectedTags,
  setSelectedTags,
  deleteTag,
  conditionalNotes,
  editNote,
  searchText,
  filterTag,
  editText,
  setEditText,
  isModalOpen,
  setIsModalOpen,
  saveEdit,
  handleKeyDown,
  isArchive,
}) {
  return (
    <>
      <div className="flex flex-col items-center">
        <MakeNote
          noteText={noteText}
          setNoteText={setNoteText}
          tagsInput={tagsInput}
          setTagsInput={setTagsInput}
          createNote={createNote}
        />
        {selectedTags.length > 0 && (
          <FilterChip
            selectedTags={selectedTags}
            setSelectedTags={setSelectedTags}
            deleteTag={deleteTag}
          />
        )}
        <NotesList
          conditionalNotes={conditionalNotes}
          editNote={editNote}
          searchText={searchText}
          filterTag={filterTag}
          isArchive={isArchive}
        />
      </div>
      {isModalOpen && (
        <Modal
          editText={editText}
          setEditText={setEditText}
          setIsModalOpen={setIsModalOpen}
          saveEdit={saveEdit}
          handleKeyDown={handleKeyDown}
        />
      )}
    </>
  );
}

export default Home;
