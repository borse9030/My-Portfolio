export default function Footer() {
  return (
    <footer className="bg-secondary py-6">
      <div className="container mx-auto px-4 md:px-6 text-center text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Bhavesh Folio. All rights reserved.</p>
      </div>
    </footer>
  );
}
