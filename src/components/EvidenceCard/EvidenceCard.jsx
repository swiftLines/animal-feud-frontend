function EvidenceCard({post}) {
  return(<>
    {post.notes}
    <br />
    {post.source}
  </>)
}
export default EvidenceCard;