module.exports = {
    aor: {
        action: {
            delete: 'Șterge',
            show: 'Afișează',
            list: 'Listă',
            save: 'Salvează',
            create: 'Crează',
            edit: 'Editează',
            cancel: 'Anulează',
            refresh: 'Actualizează',
            add_filter: 'Adaugă un filtru',
            remove_filter: 'Îndepărtează un filtru',
            back: 'Înapoi'
        },
        boolean: {
            true: 'Da',
            false: 'Nu',
        },
        page: {
            list: 'Lista de %{name}',
            edit: '%{name} #%{id}',
            show: '%{name} #%{id}',
            create: 'Crează %{name}',
            delete: 'Șterge %{name} #%{id}',
            dashboard: 'Pagina principala',
            not_found: 'Pagina nu există'
        },
        input: {
            image: {
                upload_several: 'Adăugați fișierele pe care să le încărcați sau faceți clic pentru a le selecta.',
                upload_single: 'Adăugați fișierul pe care să îl încărcați sau faceți clic pentru a selecta unul.',
            },
        },
        message: {
            yes: 'Da',
            no: 'Nu',
            are_you_sure: 'Sunteți sigur ?',
            about: 'Despre',
            not_found: 'Adresa URL introdusă este incorectă sau ați urmat un link greșit.',
        },
        navigation: {
            no_results: 'Niciun rezultat',
            page_out_of_boundaries: 'Pagina %{page} este în afara limitelor',
            page_out_from_end: 'Sfârșitul paginării',
            page_out_from_begin: 'Pagina trebuie să fie mai mare decât 1',
            page_range_info: '%{offsetBegin}-%{offsetEnd} din %{total}',
            next: 'Urmatoarea',
            prev: 'Precedenta',
        },
        auth: {
            username: 'Nume utilizator',
            password: 'Parola',
            sign_in: 'Autentificare',
            sign_in_error: 'Autentificarea a eșuat, încercați din nou',
            logout: 'Deconectați-vă',
        },
        notification: {
            updated: 'Element actualizat',
            created: 'Elementul a fost creat',
            deleted: 'Elementul a fost șters',
            item_doesnt_exist: 'Elementul nu există',
            http_error: 'Eroare de comunicare cu serverul',
        },
        validation: {
            required: 'Câmpul este necesar',
            minLength: 'Minim %{min} caractere',
            maxLength: 'Maxim %{max} caractere',
            minValue: 'Minim %{min}',
            maxValue: 'Maxim %{max}',
            number: 'Trebuie să fie un număr',
            email: 'Trebuie să fie un email',
        },
    },
};
