function EvidenceCard({post, handleDeleteEvidence}) {
  return(<>
    <p>{post.notes}</p>
    <br />
    <p>{post.source}</p>
    <br />
  </>)
}
export default EvidenceCard;