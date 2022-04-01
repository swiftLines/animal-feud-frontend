function EvidenceCard({post, handleDeleteEvidence}) {
  return(<>
    <p>{post.notes}</p>
    <p>{post.source}</p>
  </>)
}
export default EvidenceCard;