// Referral data - all crypto opportunities
const referralsData = [
    {
        id: 1,
        title: "Robinhood",
        description: "Get €50 in crypto when you sign up with my link and deposit €10 to start trading. Instant crypto reward!",
        category: "Trading",
        bonus: "€50 Instant Crypto",
        image: "assets/logos/robinhood-hq.png",
        useImage: true,
        link: "https://join.robinhood.com/eu_crypto/nikodez-09cc86/",
        featured: true
    },
    {
        id: 2,
        title: "Speed Wallet",
        description: "Deposit $100, get $10 instant. Swap to satoshi and earn $20 more. Total $130 withdrawable instantly to Binance, OKX, Bitget, Kraken.",
        category: "Crypto Wallet",
        bonus: "$10-$30 Instant Reward",
        image: "assets/logos/speed-wallet.png",
        useImage: true,
        link: "https://links.speed.app/referral?referral_code=BPCM30"
    },
    {
        id: 3,
        title: "Sling Money",
        description: "New referral steps: Sign up, deposit $100 (crypto or cash), get instant reward. Easy money transfer app.",
        category: "Money Transfer",
        bonus: "Instant Crypto Reward",
        image: "assets/logos/sling-money.png",
        useImage: true,
        link: "sling.link/join/kQt23j"
    },
    {
        id: 4,
        title: "Crypto.com",
        description: "Trade and earn: $5 for $100, $10 for $500, $20 for $1000, $65 for $5000. Extra: Get $25 with PRO Visa Card.",
        category: "Trading",
        bonus: "$5-$65 Instant Reward",
        image: "assets/logos/crypto-com.png",
        useImage: true,
        link: "https://crypto.com/app/472aw4n2kn"
    },
    {
        id: 5,
        title: "Mexc Global",
        description: "Futures trading rewards: Deposit $100 and trade to earn $20, $40, or $60 instant in your balance.",
        category: "Trading",
        bonus: "$20-$60 Instant Reward",
        image: "assets/logos/mexc.png",
        useImage: true,
        featured: true,
        link: "https://promote.mexc.com/r/J56RCIl9"
    },
    {
        id: 6,
        title: "Gate.io",
        description: "Sign up with KYC verification, deposit ≥$100 USDT, trade ≥$100 USDT, and get instant cashback rewards.",
        category: "Trading",
        bonus: "Instant Cashback",
        image: "assets/logos/gate-io.png",
        useImage: true,
        featured: true,
        link: "https://www.gate.com/referral/cashback?ref=VLFAVW9ABW&ref_type=103&page=earnVoucher&utm_cmp=PEYEQdSb"
    },
    {
        id: 7,
        title: "Binance",
        description: "The world's largest crypto exchange. Sign up and start trading with exclusive benefits and rewards.",
        category: "Trading",
        bonus: "Crypto Reward",
        image: "assets/logos/binance.png",
        useImage: true,
        featured: true,
        link: "https://app.binance.com/uni-qr/3a8vkmRM?utm_medium=web_share_copy"
    },
    {
        id: 8,
        title: "Uphold Wallet",
        description: "Sign up with KYC, deposit $101, trade $250 (3x convert USDC to USDT), and get instant reward.",
        category: "Crypto Wallet",
        bonus: "Instant Crypto Reward",
        image: "assets/logos/uphold.png",
        useImage: true,
        link: "https://wallet.uphold.com/signup?referral=837ddcd464&campaign=uw_p_d_w_acq_raf&utm_source=raf&utm_medium=referafriend"
    },
    {
        id: 9,
        title: "Binance USDC Limited",
        description: "Deposit $100-200, trade $1001 (USDC-Euro), and get 50 USDC instant reward. Limited time offer!",
        category: "Trading",
        bonus: "50 USDC Instant",
        logo: "BUSD",
        logoColor: "#f3ba2f",
        link: "https://www.binance.com/referral/earn-together/refer2earn-usdc/claim?hl=en&ref=GRO_28502_D3H8B&utm_source=default"
    },
    {
        id: 10,
        title: "Kraken Pro",
        description: "Sign up, deposit €250, trade €250 (Euro-BTC/ETH), get €75 instant reward. Low 0.40% trading fee.",
        category: "Trading",
        bonus: "€75 Instant Reward",
        image: "assets/logos/kraken.png",
        useImage: true,
        link: "https://proinvite.kraken.com/9f1e/rvr47zmp"
    },
    {
        id: 11,
        title: "Cointiply",
        description: "Earn crypto through surveys, games, and more activities. Instant withdrawal. No deposit needed!",
        category: "Earn Crypto",
        bonus: "Multiple Earning Ways",
        image: "assets/logos/cointiply.png",
        useImage: true,
        link: "https://cointiply.com/r/wpD3gX"
    },
    {
        id: 12,
        title: "Bybit Europe",
        description: "Sign up, deposit $100 & trade $500 (get 15 USDC). Order virtual card, spend $101 (get $20). Total rewards.",
        category: "Trading",
        bonus: "$15-$20 USDC Reward",
        image: "assets/logos/bybit.png",
        useImage: true,
        link: "https://www.bybit.eu/invite?ref=KVV9JJG"
    },
    {
        id: 13,
        title: "Zonda Crypto",
        description: "Free $10 reward! No deposit needed. Sign up, finish KYC, add code WELCOME, and claim instantly.",
        category: "Crypto Wallet",
        bonus: "$10 Free No Deposit",
        image: "assets/logos/zonda.png",
        useImage: true,
        link: "https://zondacrypto.com/en/first-steps"
    },
    {
        id: 14,
        title: "Altify Global",
        description: "Sign up, invest €25+ into products, get €10 instant. Plus €10 bonus from us = €20 total reward!",
        category: "Investment",
        bonus: "€20 Instant Reward",
        image: "assets/logos/altify.png",
        useImage: true,
        link: "https://web.altify.app/auth/signup?promoCode=LD25L6MRMW"
    },
    {
        id: 15,
        title: "Joko Cashback",
        description: "Download app, install Joko extension, connect bank (Revolut, Bunq, Wise), get unlimited referral rewards!",
        category: "Cashback",
        bonus: "Unlimited Rewards",
        image: "assets/logos/joko.png",
        useImage: true,
        link: "https://play.google.com/store/apps/details?id=io.wylr.joko"
    },
    {
        id: 16,
        title: "Airtm Wallet",
        description: "Sign up with KYC, deposit $6, get 5 USDC instant reward. Easy and quick crypto wallet.",
        category: "Crypto Wallet",
        bonus: "5 USDC Instant",
        image: "assets/logos/airtm.png",
        useImage: true,
        link: "https://app.airtm.com/ivt/lilko"
    }
];

// Load referrals on home page
function loadReferrals() {
    const grid = document.getElementById('referralGrid');
    if (!grid) return;

    if (referralsData.length === 0) {
        grid.innerHTML = '<div class="empty-state"><h2>No referrals available</h2><p>Content coming soon</p></div>';
        return;
    }

    grid.innerHTML = referralsData.map((referral, index) => {
        const isFeatured = referral.featured ? 'featured' : '';
        
        if (referral.useImage) {
            return `
            <div class="referral-card ${isFeatured}" onclick="goToDetail(${referral.id})" style="animation: fadeInUp 0.5s ease ${index * 0.1}s both">
                <img src="${referral.image}" alt="${referral.title}" class="card-image" onerror="this.style.background='linear-gradient(135deg, #e2e8f0 0%, #cbd5e1 100%)'">
                <div class="card-content">
                    <div class="card-category">${referral.featured ? '⭐ TOP PICK' : referral.category}</div>
                    <h3>${referral.title}</h3>
                    <p>${referral.description}</p>
                    <p class="card-bonus">${referral.bonus}</p>
                </div>
            </div>
            `;
        } else {
            return `
            <div class="referral-card ${isFeatured}" onclick="goToDetail(${referral.id})" style="animation: fadeInUp 0.5s ease ${index * 0.1}s both">
                <div class="card-logo" style="background-color: ${referral.logoColor}">
                    <span class="logo-text">${referral.logo}</span>
                </div>
                <div class="card-content">
                    <div class="card-category">${referral.featured ? '⭐ TOP PICK' : referral.category}</div>
                    <h3>${referral.title}</h3>
                    <p>${referral.description}</p>
                    <p class="card-bonus">${referral.bonus}</p>
                </div>
            </div>
            `;
        }
    }).join('');
}

// Search functionality with debounce
let searchTimeout;
function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) return;

    searchInput.addEventListener('input', (e) => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            const query = e.target.value.toLowerCase();
            const cards = document.querySelectorAll('.referral-card');
            let visibleCount = 0;

            cards.forEach(card => {
                const text = card.textContent.toLowerCase();
                const isVisible = text.includes(query);
                card.style.display = isVisible ? '' : 'none';
                if (isVisible) visibleCount++;
            });

            // Show empty state if no results
            if (visibleCount === 0 && query.length > 0) {
                const grid = document.getElementById('referralGrid');
                if (grid && !grid.querySelector('.empty-state')) {
                    const emptyDiv = document.createElement('div');
                    emptyDiv.className = 'empty-state';
                    emptyDiv.innerHTML = '<h2>No results found</h2><p>Try searching for something else</p>';
                    grid.appendChild(emptyDiv);
                }
            }
        }, 300);
    });
}

// Navigate to detail page
function goToDetail(id) {
    localStorage.setItem('selectedReferralId', id);
    window.location.href = 'pages/detail.html';
}

// Load detail page
function loadDetailPage() {
    const id = localStorage.getItem('selectedReferralId');
    if (!id) {
        window.location.href = '../index.html';
        return;
    }

    const referral = referralsData.find(r => r.id === parseInt(id));
    if (!referral) {
        window.location.href = '../index.html';
        return;
    }

    document.title = referral.title + ' - Referral Hub';
    document.getElementById('detailTitle').textContent = referral.title;
    document.getElementById('detailDescription').textContent = referral.description;
    document.getElementById('detailCategory').textContent = referral.category;
    document.getElementById('detailBonus').textContent = referral.bonus;
    
    const imageElement = document.getElementById('detailImage');
    if (referral.useImage) {
        imageElement.src = referral.image;
        imageElement.style.objectFit = 'cover';
    } else {
        imageElement.parentElement.style.background = referral.logoColor;
        imageElement.style.display = 'none';
        const logoDiv = document.createElement('div');
        logoDiv.className = 'detail-logo';
        logoDiv.style.backgroundColor = referral.logoColor;
        logoDiv.innerHTML = `<span style="font-size: 4rem; font-weight: 900; color: white; text-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);">${referral.logo}</span>`;
        imageElement.parentElement.appendChild(logoDiv);
    }
    
    document.getElementById('referralLink').value = referral.link;
    document.getElementById('openBtn').href = referral.link;

    // Fade in animation
    document.querySelector('.detail-card').style.animation = 'fadeInUp 0.5s ease';

    setupDetailActions();
}

// Setup copy and open buttons
function setupDetailActions() {
    const copyBtn = document.getElementById('copyBtn');
    if (copyBtn) {
        copyBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const link = document.getElementById('referralLink');
            
            // Use modern clipboard API
            if (navigator.clipboard) {
                navigator.clipboard.writeText(link.value).then(() => {
                    showCopySuccess(copyBtn);
                }).catch(() => {
                    fallbackCopy(link, copyBtn);
                });
            } else {
                fallbackCopy(link, copyBtn);
            }
        });
    }
}

// Fallback copy function for older browsers
function fallbackCopy(element, btn) {
    element.select();
    document.execCommand('copy');
    showCopySuccess(btn);
}

// Show copy success feedback
function showCopySuccess(btn) {
    const originalText = btn.textContent;
    const originalBg = btn.style.background;
    
    btn.textContent = '✓ Copied to clipboard!';
    btn.style.background = 'var(--success)';
    
    setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = originalBg;
    }, 2500);
}

// Add animations
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname.includes('detail.html')) {
        loadDetailPage();
    } else {
        loadReferrals();
        setupSearch();
    }
});
