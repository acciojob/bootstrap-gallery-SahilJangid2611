 const images = [
	    "https://storage.googleapis.com/acciojob-open-file-collections/image1.jpg",
	    "https://storage.googleapis.com/acciojob-open-file-collections/image2.jpg",
	    "https://storage.googleapis.com/acciojob-open-file-collections/image3.jpg",
	    "https://storage.googleapis.com/acciojob-open-file-collections/image4.jpg",
	    "https://storage.googleapis.com/acciojob-open-file-collections/image5.jpg",
	    "https://storage.googleapis.com/acciojob-open-file-collections/image6.jpg",
	    "https://storage.googleapis.com/acciojob-open-file-collections/image7.jpg",
	    "https://storage.googleapis.com/acciojob-open-file-collections/image8.jpg",
	    "https://storage.googleapis.com/acciojob-open-file-collections/image8.jpg",
	    "https://storage.googleapis.com/acciojob-open-file-collections/image9.jpg"
	    ];

        $('#imageModal').on('show.bs.modal', function (event) {
            const button = $(event.relatedTarget); l
            const index = button.data('index'); 
            const modal = $(this);

            const carouselInner = modal.find('.carousel-inner');
            carouselInner.empty();

            images.forEach((src, idx) => {
                const itemClass = idx === index ? 'carousel-item active' : 'carousel-item';
                carouselInner.append(`
                    <div class="${itemClass}">
                        <img src="${src}" class="d-block w-100" alt="Image ${idx + 1}">
                    </div>
                `);
            });
        });