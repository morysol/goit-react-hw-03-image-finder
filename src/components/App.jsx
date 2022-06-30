import { MainApp } from './App.styled';
import SearchBar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';

export const App = () => {
  console.log(ImageGallery);
  return (
    <MainApp>
      <SearchBar></SearchBar>
      <ImageGallery></ImageGallery>
    </MainApp>
  );
};

// Создай компоненты

/* <Searchbar>,Sea
  <ImageGallery>,
    <ImageGalleryItem>,
      <Loader>,
        <Button>
          и <Modal>.
            Готовые стили компонентов можно взять в файле styles.css и подправить под себя, если необходимо. */

// key (required)	str	Your API key: 27219391-602be5e609794f999d4badcc3

// style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101',
//       }}
