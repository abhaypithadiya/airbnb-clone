import Container from '@/components/container';
import ListingCard from '@/components/listings/listing-card';

const HomeListing = () => {
    const listings = [31, 87, 58, 46, 38];
    return (
        <Container>
            <div className="grid grid-cols-1 gap-8 pt-24 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-6">
                {listings.map((listingId) => (
                    <ListingCard id={listingId} key={listingId} />
                ))}
            </div>
        </Container>
    );
};

export default HomeListing;
