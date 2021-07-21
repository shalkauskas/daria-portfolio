export default function ProjectStatementParagraph(props) {
  const { title, children } = props;
  return (
    <div className="container mx-auto">
      <div className={`mb-8`}>
        <h3 className="text-left text-lg my-5 font-bold">{title}</h3>
        {children}
      </div>
    </div>
  );
}
