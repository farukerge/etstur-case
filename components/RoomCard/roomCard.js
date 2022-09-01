const roomArr = [
  {
    name: 'Superior Kara Manzaralı',
    bed: 'Çift Kişilik Geniş Yatak',
    person:"3 Kişilik",
    area:"90m2",
    img: 'https://images.etstur.com/files/images/hotelImages/TR/216166/m/Fun-Sun-Family-Life-Belek-Oda-336215.jpg',
    service1: "Oda Kahvaltı",
    service2: "0-6 1 Yaş Çocuk Ücretsiz",
    service3: "Ücretsiz İptal",
    price:"1900 TL",
  },
  {
    name: 'Superior Family Plus',
    bed: 'Çift Kişilik Geniş Yatak',
    person:"3 Kişilik",
    area:"90m2",
    img: 'https://images.etstur.com/files/images/hotelImages/TR/216166/m/Fun-Sun-Family-Life-Belek-Oda-336213.jpg',
    service1: "Oda Kahvaltı",
    service2: "0-6 1 Yaş Çocuk Ücretsiz",
    service3: "Ücretsiz İptal",
    price:"1900 TL",
  },
  {
    name: 'Deniz Manzaralı',
    bed: 'Çift Kişilik Geniş Yatak',
    person: "3 Kişilik",
    area:"90m2",
    img: 'https://images.etstur.com/files/images/hotelImages/TR/216166/m/Fun-Sun-Family-Life-Belek-Oda-336226.jpg',
    service1: "Oda Kahvaltı",
    service2: "0-6 1 Yaş Çocuk Ücretsiz",
    service3: "Ücretsiz İptal",
    price:"1900 TL",
  },
];





$(document).ready(() => {
    let appendDiv = ``;
    
    roomArr.forEach((key, index) => {

        appendDiv += `

    <div class="card mb-3 ">
        <div class="row g-0">
            <div  class="col-md-6 justify-content-center align-items-center d-flex">
                <div class="card-body">
                    <div class="row">
                        <div class="col-sm-6">
                            <img src="${key.img}"
                                class="img-fluid rounded-start" alt="...">
                        </div>
                        <div class="col-sm-6">
                            <h5 class="card-title fw-bold">${key.name}</h5>
                            <ul class="list-unstyled">
                                <li class="mb-1 >
                                    <i class="fa-solid fa-bed"></i>${key.bed}
                                </li>
                                <li class="mb-1 >
                                    <i class="fa-solid fa-users me-2 text-warning"></i>${key.person}
                                </li>
                                <li><i class="fa-solid fa-maximize me-2 text-warning "></i>${key.area}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6 d-flex justify-content-center align-items-center ">
                <div class="card-body">
                    <div class="row border rounded p-5">
                        <div class="col-sm-6 align-items-center d-flex justify-content-center ">
                            <ul class="list-unstyled">
                                <li class="mb-2">
                                    <i class="fa-solid fa-utensils me-2 text-warning"></i>${key.service1}
                                </li>
                                <li class="border border-warning bg-warning rounded p-1 mb-2 "
                                    style="--bs-bg-opacity: .2; font-size: 15px;">
                                    <i class="fa-solid fa-person me-2 text-warning"></i>${key.service2}
                                </li>
                                <li class="border border-warning bg-warning rounded p-1 mb-2 "
                                    style="--bs-bg-opacity: .2; font-size: 15px;">
                                    <i class="fa-solid fa-circle-check me-2 text-warning"></i>${key.service3}
                                </li>
                            </ul>
                        </div>
                        <div class="col-sm-6 text-end">
                            <p class="p-0 m-0">3 Gece için Toplam</p>
                            <h3 class="fw-bold">${key.price}</h3>
                            <button type="button" class="btn btn-outline-warning">Odayı Seç</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        `
    });
    
    $('#roomCard').html(appendDiv);
    
});