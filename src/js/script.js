'use strict';

window.addEventListener('DOMContentLoaded', () => {

    const cardsWrapper = document.querySelector('.service-cards');

    const cards = [
        {
            useXlinkHref: 'sprite-svg/sprite.svg#service-cards__svg-plumbing',
            title: 'Plumbing',
            lists: [
                {
                    text: 'Install / Replace a Toilet',
                },
                {
                    text: 'Install / Replace a Faucet',
                },
                {
                    text: 'Fix a Leaking',
                },
                {
                    text: 'Install / Replace a Sink',
                },
                {
                    text: 'Repair Under Sink Plumbing',
                },
            ],
            btn: 'View more'
        },
        {
            useXlinkHref: 'sprite-svg/sprite.svg#service-cards__svg-drywall-painting',
            title: 'Drywall & painting',
            lists: [
                {
                    text: 'Install Drywall',
                },
                {
                    text: 'Patch and Paint Drywall',
                },
                {
                    text: 'Paint a Wall / Trim',
                },
                {
                    text: 'Paint or Stain A Fence',
                },
                {
                    text: 'Paint a Cabinet Door',
                },
            ],
            btn: 'View more'
        },
        {
            useXlinkHref: 'sprite-svg/sprite.svg#service-cards__svg-furniture-assembly',
            title: 'Furniture assembly',
            lists: [
                {
                    text: 'Assemble Fitness Equipment',
                },
                {
                    text: 'Assemble - Custom Request',
                },
                {
                    text: 'Assemble a TV Stand',
                },
                {
                    text: 'Assemble Pet Furniture',
                },
                {
                    text: 'Assemble a Bar Cabinet',
                },
            ],
            btn: 'View more'
        },
        {
            useXlinkHref: 'sprite-svg/sprite.svg#service-cards__svg-electrical',
            title: 'Electrical',
            lists: [
                {
                    text: 'Install / Replace a Ceiling Fan',
                },
                {
                    text: 'Replace Switch & Outlet Faceplate',
                },
                {
                    text: 'Upgrade to a Video Doorbell',
                },
                {
                    text: 'Install / Replace an Bathroom Exhaust Fan',
                },
            ],
            btn: 'View more'
        },
        {
            useXlinkHref: 'sprite-svg/sprite.svg#service-cards__svg-doors-windows',
            title: 'Doors & windows',
            lists: [
                {
                    text: 'Install / Replace New Door',
                },
                {
                    text: 'Install / Replace a Screen Door',
                },
                {
                    text: 'Install / Replace a Window Screen',
                },
                {
                    text: 'Repair a Door Frame',
                },
            ],
            btn: 'View more'
        },
        {
            useXlinkHref: 'sprite-svg/sprite.svg#service-cards__svg-hanging-mounting',
            title: 'Hanging & mounting',
            lists: [
                {
                    text: 'Mount a TV',
                },
                {
                    text: 'Remove a TV Mount from Wall',
                },
                {
                    text: 'Mount and Hang a Projector Screen',
                },
                {
                    text: 'Hang a Bathroom Fixture',
                },
            ],
            btn: 'View more'
        },
        {
            useXlinkHref: 'sprite-svg/sprite.svg#service-cards__svg-appliance-installation',
            title: 'Appliance installation',
            lists: [
                {
                    text: 'Replace an Existing Dishwasher',
                },
                {
                    text: 'Replace an Existing Microwave',
                },
                {
                    text: 'Replace an Existing Oven',
                },
            ],
            btn: 'View more'
        },
        {
            useXlinkHref: 'sprite-svg/sprite.svg#service-cards__svg-smart-home',
            title: 'Smart home',
            lists: [
                {
                    text: 'Install a Smart Lock',
                },
                {
                    text: 'Install a Smart Home Security Camera',
                },
                {
                    text: 'Mount a Baby Monitor Camera on the Wall',
                },
                {
                    text: 'Install an Under Sink Water Filtration System',
                },
            ],
            btn: 'View more'
        },
        {
            useXlinkHref: 'sprite-svg/sprite.svg#service-cards__svg-outdoor',
            title: 'Outdoor',
            lists: [
                {
                    text: ' Assemble an Outdoor Trampoline',
                },
                {
                    text: 'Hang a Garage Shelving Unit',
                },
                {
                    text: 'Install Outdoor Decorative Exterior Window Shutters',
                },
                {
                    text: 'Install a Storm Door',
                },
            ],
            btn: 'View more'
        },

    ];

    function createItems(wrapper, size, cards) {
        wrapper.innerHTML = Array.from(Array(size).keys()).map((key) => (
            `<div class="service-cards__item">
                <div class="service-cards__item-top">
                    <svg class="service-cards__item-svg">
                        <use xlink:href="${cards[key].useXlinkHref}"></use>
                    </svg>
                    <div class="service-cards__item-title">${cards[key].title}</div>
                    <ul class="service-cards__item-lists">
                        ${cards[key].lists.map(list => `
                            <li class="service-cards__item-list">${list.text}</li>
                        `).join('')}
                    </ul>
                </div>
                <div class="service-cards__item-bottom">
                    <a class="service-cards__item-link"  href="#">${cards[key].btn}</a>
                </div>
            </div>`
        )).join('');
    }

    createItems(cardsWrapper, cards.length, cards);
});