# goit-react-hw-07-phonebook
Contact book
Refactorizează codul aplicației "Contact Book". Șterge codul responsabil de stocarea și citirea contactelor din localStorage și adaugă interacțiunea cu backend-ul pentru stocarea contactelor pe server.

Backend
Creează-ți propriul backend personalizat pentru development folosind UI-ul serviciului mockapi.io. Înregistrează-te folosind contul tău GitHub.

Creează resursa contacts pentru a obține endpoint-ul /contacts. Utilizează constructorul de resurse și descrie obiectul de contact ca în ilustrația de mai jos:

Contact schema
Forma state-ului
Adaugă în state-ul Redux indicatorul de "loading" și de gestionare a erorilor. Pentru aceasta, modifică forma state-ului.

{
  contacts: {
    items: [],
    isLoading: false,
    error: null
  },
  filter: ""
}

Operații
Folosește funcția createAsyncThunk pentru a declara generatoare de acțiuni asincrone și pentru a efectua cereri HTTP. Procesarea acțiunilor și actualizarea datelor în starea Redux se face cu ajutorul createSlice.

Declară următoarele operații:

fetchContacts - obținerea un array de contacte (metoda GET) prin cerere. Action type "contacts/fetchAll".
addContact - adăugarea unui contact (metoda POST). Action type "contacts/addContact".
deleteContact - ștergerea unui contact (metoda DELETE). Action type "contacts/deleteContact".
