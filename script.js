const add_btn = document.getElementById('add-btn');
        const modal_container = document.getElementById('modal-container');
        const btn_cancel = document.getElementById('btn-cancel');

        add_btn.addEventListener('click', () => {
            modal_container.classList.add('show');
        })

        btn_cancel.addEventListener('click', () => {
            modal_container.classList.remove('show');
        })