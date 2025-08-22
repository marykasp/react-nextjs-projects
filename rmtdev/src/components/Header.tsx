import BookmarksButton from "./BookmarksButton";
import Logo from "./Logo";
import SearchForm from "./SearchForm";
import { type JobItem } from "../lib/types";

type HeaderProps = {
  setJobList: (jobs: JobItem[]) => void;
};

export default function Header({ setJobList }: HeaderProps) {
  return (
    <header className="header">
      <div className="header__top">
        <Logo />
        <BookmarksButton />
      </div>

      <SearchForm onSetJobList={setJobList} />
    </header>
  );
}
