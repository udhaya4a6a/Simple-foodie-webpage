import React from 'react';

function App() {
    return (
        <div style={{ fontFamily: 'Arial, sans-serif', background: '#fff8f0', minHeight: '100vh' }}>
            <header style={{ background: '#ff7043', color: '#fff', padding: '2rem 0', textAlign: 'center' }}>
                <h1>Simple Foodie Webpage</h1>
                <p>Discover delicious recipes and food inspiration!</p>
            </header>
            <main style={{ maxWidth: '900px', margin: '2rem auto', padding: '1rem' }}>
                <section>
                    <h2>Featured Recipes</h2>
                    <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
                        <RecipeCard
                            title="Classic Margherita Pizza"
                            image="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80"
                            description="A simple and delicious pizza topped with fresh mozzarella, tomatoes, and basil."
                        />
                        <RecipeCard
                            title="Avocado Toast"
                            image="https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80"
                            description="Crispy toast topped with creamy avocado and a sprinkle of chili flakes."
                        />
                        <RecipeCard
                            title="Berry Smoothie Bowl"
                            image="https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80"
                            description="A refreshing smoothie bowl with mixed berries, banana, and granola."
                        />
                    </div>
                </section>
                <section style={{ marginTop: '3rem' }}>
                    <h2>About Simple Foodie</h2>
                    <p>
                        Simple Foodie is your go-to place for easy and tasty recipes. Whether you're a beginner or a seasoned cook, you'll find something to love here!
                    </p>
                </section>
            </main>
            <footer style={{ background: '#ff7043', color: '#fff', textAlign: 'center', padding: '1rem 0' }}>
                &copy; {new Date().getFullYear()} Simple Foodie. All rights reserved.
            </footer>
        </div>
    );
}

function RecipeCard({ title, image, description }) {
    return (
        <div style={{
            background: '#fff',
            borderRadius: '10px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            width: '260px',
            overflow: 'hidden'
        }}>
            <img src={image} alt={title} style={{ width: '100%', height: '160px', objectFit: 'cover' }} />
            <div style={{ padding: '1rem' }}>
                <h3 style={{ margin: '0 0 0.5rem 0' }}>{title}</h3>
                <p style={{ color: '#555' }}>{description}</p>
            </div>
        </div>
    );
}

export default App;